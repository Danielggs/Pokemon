const { Router } = require('express');
const axios = require('axios');
const {Pokemon , Tipo} = require('../db')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

async function traerPokemon(){
    const arrayPoke= []

    for (let i = 1; i <= 100; i++) {
        const api = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`)
        arrayPoke.push(api.data);
    }

    const dataPoke = arrayPoke.map(el=> {return({
        id: el.id,
        name: el.name,
        img: el.sprites.other.dream_world.front_default,
        tipo: el.types.map(el=> el.type.name),
        height: el.height,
        weight: el.weight,
        hp: el.stats[0].base_stat, 
        attack: el.stats[1].base_stat,
        defense:el.stats[2].base_stat ,
        speed: el.stats[5].base_stat
    })})

    return dataPoke


}

async function traerTipo(){
    
    const types = await axios('https://pokeapi.co/api/v2/type')

    const dataTypes = types.data.results.map(el=>{return({
       name: el.name
    })})
    const dataF = dataTypes.map(el=> el.name)
    return dataF;
    
}

async function TraeDb(){

    const db = await Pokemon.findAll({include:[{model:Tipo}]})

    let dataClean = db.map(el=>{return({
        id: el.id,
        name: el.name,
        hp: el.hp,
        attack:el.attack,
        defense:el.defense,
        speed:el.speed,
        height:el.height,
        weight:el.weight,
        tipo:el.tipos.map(el => el.name ),
        create:el.CreateDb

    })})

    return dataClean;
}

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemon' , async (req,res)=>{

    const name = req.query.name

       const data = await  traerPokemon();
        const dataDB = await  TraeDb();
        const concat =  [...data,...dataDB]
   

  if(name){
        let pokefiltre =  concat.filter(el => el.name.toLowerCase().includes(name.toLowerCase())); 
    
        pokefiltre.length ? res.status(200).send(pokefiltre) : res.status(404).send('no se encontro el pokemon')
    }else{
     
        res.status(200).send(concat)
    }

  
})

router.get('/types', async (req,res)=>{

 

    const data = await traerTipo();
    for(let i=0 ; i< data.length ; i++){
       await Tipo.findOrCreate(  {where:{name: data[i]}})
    } 
    result= await Tipo.findAll()
    res.send(result)


})

router.post('/pokemon' , async (req,res)=>{
    const{ name, weight, height, hp, attack, defense, speed , tipo} = req.body

    if( !name|| !weight|| !height|| !hp|| !attack|| !defense || !speed || !tipo)
        res.status(400).send( {msg: "Faltan Datos"});
    try{
          const newPoke= await Pokemon.create({ name, weight, height, hp, attack, defense, speed });

        let result= await Tipo.findAll({
            where :{name : tipo }
        })
    
     

        newPoke.addTipos(result)

        res.send("Creado")


    }catch(e){
        console.log(e)
        }

      


})

router.get('/pokemon/:id' ,async (req, res)=>{

    const id = req.params.id;

    const data = await  traerPokemon();
    const dataDB = await  TraeDb();
    const concat =  [...data,...dataDB]

    let pokeId =  concat.filter(el => el.id == id ); 

   
    res.send(pokeId)


})



module.exports = router;

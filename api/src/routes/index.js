const { Router } = require('express');
const axios = require('axios');
const {Pokemon , Tipo} = require('../db')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
let promises=[]

for (let i = 1; i <= 100; i++) {
    promises.push( axios(`https://pokeapi.co/api/v2/pokemon/${i}`));
}


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


const dataretrie = async function(){

    let result = await Promise.all(promises)
   

    const dataPoke = result.map(el=> {return({
      data:el.data
    })})
    console.log(dataPoke[0])

    const dataclean = dataPoke.map(el=> {return({
        id: el.data.id,
        name: el.data.name,
        img: el.data.sprites.other.dream_world.front_default,
        tipo: el.data.types.map(el=> el.type.name),
        height: el.data.height,
        weight: el.data.weight,
        hp: el.data.stats[0].base_stat, 
        attack: el.data.stats[1].base_stat,
        defense:el.data.stats[2].base_stat ,
        speed: el.data.stats[5].base_stat
    })})
   
    return dataclean

    
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
        name: el.name.toLowerCase(),
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

       const data = await  dataretrie();
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
    const dataDB = await  TraeDb();
   

   
    if(/[a-zA-Z]/.test(id)){
        console.log("Busqueda en la base de datos")

        let pokeId =  dataDB.filter(el => el.id == id ); 
        console.log(pokeId)
       
        res.send(pokeId)

    }else if(id>0){
        const api = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)

     let=   pokeid={
            id: api.data.id,
            name: api.data.name,
            img: api.data.sprites.other.dream_world.front_default,
            tipo: api.data.types.map(el=> el.type.name),
            height: api.data.height,
            weight: api.data.weight,
            hp: api.data.stats[0].base_stat, 
            attack: api.data.stats[1].base_stat,
            defense:api.data.stats[2].base_stat ,
            speed: api.data.stats[5].base_stat
        }
        
        console.log(pokeid)
       
        res.send([pokeid])

    }else{
        res.status(404).send("El juego no existe")
        console.log("No Lo Encontre")
    }


})



module.exports = router;

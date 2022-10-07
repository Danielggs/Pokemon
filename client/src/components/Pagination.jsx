import React from 'react';
import "./Pagination.css"

const Pagination = ({ postsPerPage, totalPoke, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPoke / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <p onClick={() => paginate(number)} className='page-link'>
              {number}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
import React from 'react'

import './pagination.css'

const Pagination = (props) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(props.totalProducts / props.productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul className='pagination'>
        {pageNumbers.map(number => (
            <li key={number} className='page-item' onClick={() => props.paginate(number)}>
                {number}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination;

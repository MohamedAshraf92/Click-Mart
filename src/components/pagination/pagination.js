import React from 'react'

import './pagination.css'

const Pagination = (props) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(props.totalProducts / props.productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='pagination'>
      <ul>
        {pageNumbers.map(number => (
            <li key={number}>
                <a href={`#${number}`} onClick={() => props.paginate(number)}>{number}</a>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination;

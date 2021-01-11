import React from "react";
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const Pagination = (props) => {
  let { totalCount, pageSize, onClick, currentPage } = props;
  let totalPages = Math.ceil(totalCount / pageSize);
  return (
    <React.Fragment>
      { totalPages > 1 ?
      (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {Array.from(Array(totalPages)).map((x, page) => (
      
            <li key={page} className={page+1 === currentPage ? "page-item active" : "page-item"}>
              <NavLink to="#"
              className="page-link"
              onClick={()=>onClick(page+1)}>
                {page + 1}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      )
      : ""
      }

    </React.Fragment>
  );
}

Pagination.propTypes={
    totalCount : PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired,
    onClick:PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
}
export default Pagination;

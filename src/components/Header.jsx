import React, { useState } from 'react';
import FilterWrapper from '../styles/FilterWrapper';
import FilterBadge from '../styles/FilterBadge';
import HeaderImage from '../styles/HeaderImage';
function Header(props) {
  const delay = 500
  const [show,setShow] = useState(props.filters.length !== 0)
  const handleClick = () => {
    setShow(false)
    setTimeout(() => {
      props.clearFilters()
      setShow(true)
    },delay)
  }

  return (
    <header>
      <HeaderImage />
      <FilterWrapper show={show && props.filters.length !== 0} delay={delay}>
        <div>
          {
            props.filters.length !== 0 ? 
            props.filters.map(( filter,index ) => (
              <FilterBadge key={index}>
                <div className="name">{filter}</div>
                <div className="close" onClick={() => props.deleteOneFilter(filter)} >
                  <img src="images/icon-remove.svg" alt="remove icon" />
                </div>
              </FilterBadge>
            )) 
            : null 
          }
        </div>
        <button onClick={handleClick}>Clear</button>
      </FilterWrapper>
    </header>
  );
}

export default Header;
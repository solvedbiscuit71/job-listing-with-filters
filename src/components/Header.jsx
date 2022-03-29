import React, { useState } from 'react';
import FilterWrapper from '../styles/components/FilterWrapper';
import Filter from '../styles/components/FilterWrapper/Filter';
import HeaderWrapper from '../styles/layouts/HeaderWrapper';
function Header(props) {
  const delay = 500
  const [show,setShow] = useState(props.filters.length !== 0)
  const handleClick = () => {
    setShow(false)
    setTimeout(() => {
      props.clearFilters()
    },delay)
  }

  return (
    <HeaderWrapper>
      <FilterWrapper show={show} delay={delay}>
        <div>
          {
            props.filters.length !== 0 ? 
            props.filters.map(( filter,index ) => (
              <Filter key={index}>
                <div className="name">{filter}</div>
                <div className="close">
                  <img src="images/icon-remove.svg" alt="remove icon" />
                </div>
              </Filter>
            )) 
            : null 
          }
        </div>
        <button onClick={handleClick}>Clear</button>
      </FilterWrapper>
    </HeaderWrapper>
  );
}

export default Header;
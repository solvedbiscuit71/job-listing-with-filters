import React from 'react';
function Header(props) {
  return (
    <header>
      <div className={ props.filters.length !== 0 ? "filters filters--show" : "filters" }>
        <div className="filters-container">
          { props.filters.length !== 0 ? props.filters.map(( filter,index ) => <div key={index} className='filter'>{filter}</div>) : null }
        </div>
        <button onClick={props.clearFilters}>Clear</button>
      </div>
    </header>
  );
}

export default Header;
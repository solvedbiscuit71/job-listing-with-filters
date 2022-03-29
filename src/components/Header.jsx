import React from 'react';
function Header(props) {
  return (
    <header>
      <div className="header__filters">
        <div className="filter">
          <div className="tag">Frontend</div>
          <div className="tag">CSS</div>
          <div className="tag">JavaScript</div>
        </div>

        <button>Clear</button>
      </div>
    </header>
  );
}

export default Header;
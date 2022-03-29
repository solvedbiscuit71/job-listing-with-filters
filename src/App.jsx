import React from 'react';
function App(props) {
  return ( 
    <>
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

      <section className="job-list">
        <div className="job job--featured">
          <img src="images/photosnap.svg" alt="photosnap logo" />

          <div className="company">
            <h1>Photosnap</h1>

            <div className="tag">NEW!</div>
            <div className="tag">FEATURED</div>
          </div>

          <div className="role">
            <h1>Senior Frontend Developer</h1>

            <div className="role-flex">
              <div>1d ago</div>
              <div className="bullet"></div>
              <div>Full Time</div>
              <div className="bullet"></div>
              <div>USA Only</div>
            </div>
          </div>

          <div className="skills">
            <div className="tag">Frontend</div>
            <div className="tag">Senior</div>
            <div className="tag">HTML</div>
            <div className="tag">CSS</div>
            <div className="tag">JavaScript</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
import React from 'react';
function Job(props) {
  const skills = []
  skills.push(props.role)
  skills.push(props.level)
  skills.push(...props.languages)
  skills.push(...props.tools)

  return (
    <div className={props.featured ? "job job--featured" : "job"}>
      <img className="job__logo" src={props.logo} alt={`${props.company}'s logo`} />

      <div className="job__company">
        <h1>{props.company}</h1>

        { props.new ? <div className='badge'>NEW!</div> : null }
        { props.featured ? <div className='badge'>FEATURED</div> : null }
      </div>

      <div className="job__role">
        <h1>{props.position}</h1>

        <div className="role-info">
          <div>{props.postedAt}</div>
          <span className="bullet"></span>
          <div>{props.contract}</div>
          <span className="bullet"></span>
          <div>{props.location}</div>
        </div>
      </div>

      <div className="job__skills">
        { skills.map(( skill,index ) => <div key={index} className='tag'>{skill}</div>) }
      </div>
    </div>
  );
}

export default Job;
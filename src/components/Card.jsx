import React from 'react';
import CardTag from '../styles/CardTag';
import CardWrapper from '../styles/CardWrapper';
import FilterBadge from '../styles/FilterBadge';
import RoleWrapper from '../styles/RoleWrapper';
function Job(props) {
  const skills = []
  skills.push(props.role)
  skills.push(props.level)
  skills.push(...props.languages)
  skills.push(...props.tools)

  return (
    <CardWrapper featured={props.featured}>
      <img className="logo" src={props.logo} alt={`${props.company}'s logo`} />

      <div className="company">
        <h1>{props.company}</h1>

        { props.new ? <CardTag className='badge'><span>NEW!</span></CardTag> : null }
        { props.featured ? <CardTag modifier='secondary' className='badge'><span>FEATURED</span></CardTag> : null }
      </div>

      <div className="role">
        <h2>{props.position}</h2>

        <RoleWrapper>
          <div>{props.postedAt}</div>
          <span className="bullet"></span>
          <div>{props.contract}</div>
          <span className="bullet"></span>
          <div>{props.location}</div>
        </RoleWrapper>
      </div>

      <div className="skills">
        { skills.map(( skill,index ) => <FilterBadge key={index} noClose>{skill}</FilterBadge>) }
      </div>
    </CardWrapper>
  );
}

export default Job;
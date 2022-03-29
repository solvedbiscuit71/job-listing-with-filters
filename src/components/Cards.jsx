import React from 'react';
import CardContainer from '../styles/CardContainer';
import Card from './Card';
function Cards(props) {
  return (
    <CardContainer>
      { props.jobList && props.jobList.map(job => <Card key={job.id} {...job} />)}
    </CardContainer>
  );
}

export default Cards;
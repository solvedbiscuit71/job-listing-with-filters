import React from 'react';
import Card from './Card';
function Cards(props) {
  return (
    <section className="job-list">
      { props.jobList && props.jobList.map(job => <Card key={job.id} {...job} />)}
    </section>
  );
}

export default Cards;
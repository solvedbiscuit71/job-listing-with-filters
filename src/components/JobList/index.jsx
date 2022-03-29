import React from 'react';
import Job from './Job';
function JobList(props) {
  return (
    <section className="job-list">
      { props.jobList && props.jobList.map(job => <Job key={job.id} {...job} />)}
    </section>
  );
}

export default JobList;
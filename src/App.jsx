import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
function App(props) {
  const [jobList,setJobList] = useState(null)
  const [filters,setFilters] = useState([
    "Frontend",
    "CSS",
    "JavaScript"
  ])

  useEffect(_ => {
    fetch('data.json')
      .then(res => res.json())
      .then(res => {
        setJobList(res)
      })
      .catch(error => console.log(error))
  },[])

  return ( 
    <>
      <Header filters={filters} clearFilters={() => setFilters([])} />
      <JobList jobList={jobList} />
    </>
  );
}

export default App;
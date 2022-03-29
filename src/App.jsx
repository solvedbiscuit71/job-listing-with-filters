import { Global, ThemeProvider } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';

const theme = {
  headerBg: 'hsl(180, 29%, 50%)',
  mainBg: 'hsl(180, 52%, 96%)',
  tagBg: 'hsl(180, 31%, 95%)',
  textColor: 'black',
  textColorLight: 'hsl(180, 8%, 52%)',
  featuredBg: 'hsl(180, 14%, 20%)'
}

function App(props) {
  const [jobList,setJobList] = useState(null)
  const [filters,setFilters] = useState([])

  useEffect(_ => {
    fetch('data.json')
      .then(res => res.json())
      .then(res => {
        setJobList(res)
      })
      .catch(error => console.log(error))
  },[])

  const isInArray = (item,array) => {
    const isThere = array.find(element => item === element)
    return isThere !== undefined ? true : false
  }

  const addFilter = (skill) => {
    if (!isInArray(skill,filters)) {
      setFilters([...filters,skill])
    }
  }

  const FilterJob = () => {
    if (filters.length === 0) {
      return jobList
    }

    return (jobList.filter(job => {
      let count = 0

      job.skills.forEach(skill => {
        if (isInArray(skill,filters)) {
          count++
        }
      })

      if (count === filters.length) {
        return true
      }
      return false
    }))
  }

  return ( 
    <>
      <Global styles={`
      @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');

      *,*::before,*::after {
        box-sizing: border-box;
        transition-property: color,background-color;
        transition-duration: 200ms;
        transition-timing-function: ease-in-out;
      }

      html,body {
        margin: 0;
        padding: 0;
        background-color: hsl(180, 52%, 96%);
        font-family: "Spartan";
      }
      `}
      />

      <ThemeProvider theme={theme}>
        <Header filters={filters} clearFilters={() => setFilters([])} deleteOneFilter={(name) => setFilters(filters.filter(item => item !== name))} />
        <Cards jobList={FilterJob()} addFilter={addFilter} />
      </ThemeProvider>
    </>
  );
}

export default App;
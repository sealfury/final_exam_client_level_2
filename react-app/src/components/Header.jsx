import React, { useState, useEffect } from 'react'
import {Container, Grid, Menu} from 'semantic-ui-react'
import axios from 'axios'
import SubHeader from './SubHeader'



const Header = () => {
  const [courses, setCourses] = useState([])
  
  useEffect(() => {
    const fetchProjectData = async () => {
      let response 
      response = await axios.get('./data/courses.json')
      setCourses(response.data)
      
    }
    fetchProjectData(courses)
  }, [courses])

  let courseData = (
    <div>
      {courses.map(course => {
        return <SubHeader course={{...course}} />
      })}
    </div>
  )
  
  return (
    <Container>
      <Grid columns={6}>
        {courseData}
      </Grid>
     
    </Container>
  )
}

export default Header

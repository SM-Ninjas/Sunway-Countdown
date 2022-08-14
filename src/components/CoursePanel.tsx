import React from 'react'
import styled from 'styled-components'
import { themes } from '../context/Theme'

const Container = styled.div`
    width: 33.33%;
    height: 100vh;
    background-color: ${themes.light.body};
`

const CoursePanel = () => {
  return (
    <Container className='hidden lg:flex'>
        
    </Container>
  )
}

export default CoursePanel
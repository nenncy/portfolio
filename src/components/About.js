import React,{ forwardRef }  from 'react'
// import ParticlesBg from 'particles-bg'
import { Main } from './main'
import { Intro } from './intro'

export const About = forwardRef((props, ref)  => {
  return (
    <div ref={ref} >
        <Main></Main> 
        <Intro></Intro>    
    </div>
  )
});

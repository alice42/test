import React from 'react'
import CV from './Cv'
import Projects from './Projects'
import { useParams } from 'react-router-dom'

const Content = props => {
  let { id } = useParams()
  const content = {
    resume: <CV {...props} />,
    projects: <Projects {...props} />
  }
  return <main>{content[`${id}`]}</main>
}

export default Content

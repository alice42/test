import React from 'react'
import {
  StyledAnim,
  StyledDiagonal,
  StyledTitleRight,
  StyledTextRight,
  StyledTextLeft
} from './styles/StyledContent'

const Projects = props => {
  const { theme } = props
  return (
    <StyledAnim styled={{ animRight: true }} theme={theme}>
      <StyledDiagonal spacing={0} size={15} />
      <StyledTitleRight spacing={0} />
      <StyledTextRight spacing={0} />
      <StyledDiagonal spacing={30} size={15} />
      <StyledDiagonal spacing={60} size={15} />
      <StyledDiagonal spacing={90} size={15} />
      <StyledDiagonal styled={{ left: true }} spacing={7} size={33} />
      <StyledDiagonal styled={{ left: true }} spacing={37} size={33} />
      <StyledDiagonal styled={{ left: true }} spacing={67} size={33} />
      <StyledDiagonal styled={{ left: true }} spacing={97} size={33} />
    </StyledAnim>
  )
}

export default Projects

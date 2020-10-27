import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const increaseHorizontally = size => keyframes`
    100% {
        width: ${size}em;
    }
`
export const StyledAnim = styled(({ ...props }) => <div {...props} />)`
  width: 2px;
  background-color: ${props => props.theme.color};
  margin-top: 7em;
  animation: grow 1s forwards;
  ${props =>
    props.styled && props.styled.animRight
      ? 'margin-left: calc(50% + 10em);'
      : 'margin-left: calc(50% - 10em);'}
  ${props =>
    props.styled && props.styled.animRight
      ? 'transform: translateX(50%);'
      : 'transform: translateX(-50%);'}
  @keyframes grow {
    0% {
      height: 0;
      bottom: 0;
    }
    100% {
      height: 70em;
      bottom: 7em;
    }
  }
`

export const StyledDiagonal = styled(({ ...other }) => <div {...other} />)`
  width: 0;
  top: ${props => props.spacing}%;
  border-bottom: 2px solid ${props => props.theme.color};
  -webkit-animation: increaseDiag 1s;
  -moz-animation: increaseDiag 1s;
  -o-animation: increaseDiag 1s;
  animation: increaseDiag 1s;
  animation-fill-mode: forwards;
  margin-left: 1px;
  margin-top: 0px;
  animation-delay: 2s;
  -webkit-animation-delay: 1s;
  position: absolute;
  content: '';
  transform: ${props =>
    props.styled && props.styled.left ? 'rotate(-125deg)' : 'rotate(-55deg)'};
  transform-origin: left;
  :after {
    width: 0;
    transform: ${props =>
      props.styled && props.styled.left ? 'rotate(-55deg)' : 'rotate(55deg)'};
    border-bottom: 2px solid ${props => props.theme.color};
    animation: ${props => increaseHorizontally(props.size)} 1s linear;
    -webkit-animation: ${props => increaseHorizontally(props.size)} 1s linear;
    -moz-animation: ${props => increaseHorizontally(props.size)} 1s linear;
    -o-animation: ${props => increaseHorizontally(props.size)} 1s linear;
    animation-fill-mode: forwards;
    animation-delay: 2s;
    -webkit-animation-delay: 2s;
    position: absolute;
    content: '';
    margin-top: 0;
    margin-left: 3.2em;
    transform-origin: left;
  }
  @keyframes increaseDiag {
    100% {
      width: 3.3em;
    }
  }
`

//RIGHT
export const StyledTextRight = styled(({ ...other }) => <div {...other} />)`
  top: ${props => props.spacing}%;
  margin-left: 31px;
  position: absolute;
  width: 33em;
`

export const StyledTitleRight = styled(({ ...other }) => <div {...other} />)`
  top: ${props => props.spacing}%;
  margin-left: 32px;
  margin-top: -28px;
  font-size: 16px;
  position: absolute;
  width: max-content;
`
//LEFT
export const StyledTitleLeft = styled(({ ...other }) => <div {...other} />)`
  top: ${props => props.spacing}%;
  margin-left: -210px;
  margin-top: -28px;
  font-size: 16px;
  position: absolute;
  width: max-content;
`

export const StyledTextLeft = styled(({ ...other }) => <div {...other} />)`
  top: ${props => props.spacing}%;
  margin-left: -210px;
  position: absolute;
  width: 15em;
`

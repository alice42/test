import React from 'react'
import styled from '@emotion/styled'

export const StyledButton = styled(({ ...other }) => <button {...other} />)`
  border-radius: 25px;
  width: 3em;
  height: 3em;
  background-color: ${props => props.theme.color};
  border: 3px solid ${props => props.theme.color};
  color: ${props => props.theme.backgroundColor};
  cursor: pointer;
  outline: none;
  text-align: center;
  :hover {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
  }
`
export const StyledButtonsWrapper = styled(({ ...other }) => (
  <div {...other} />
))`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: calc(100% - 48px);
  justify-content: space-between;
  height: -webkit-fill-available;
  .group {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
  }
  svg {
    margin-top: 2px;
    width: unset;
    height: unset;
  }
`

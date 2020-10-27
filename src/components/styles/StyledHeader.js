import React from 'react'
import styled from '@emotion/styled'
import Toolbar from '@material-ui/core/Toolbar'

export const StyledToolbar = styled(({ ...other }) => <Toolbar {...other} />)`
  background-color: ${props => props.theme.backgroundColor};
  border-bottom: 1px solid ${props => props.theme.color};
  .toolbartitle {
    flex: 1;
  }
  .toolbartitlebold {
    flex: 1;
    font-weight: 600;
  }
`
export const StyledToolbarSecondary = styled(({ ...other }) => (
  <Toolbar {...other} />
))`
  background-color: ${props => props.theme.backgroundColor};
  border-bottom: 1px solid ${props => props.theme.color};
  color: ${props => props.theme.color};
  justify-content: space-around;
  over-flow-x: auto;
  .toolbarlink {
    flex-shrink: 0;
    text-decoration: none;
    color: inherit;
  }
`

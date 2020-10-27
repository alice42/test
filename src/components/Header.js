import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import Buttons from './Buttons'
import { StyledToolbarSecondary, StyledToolbar } from './styles/StyledHeader'

const Header = props => {
  const { sections, title, subTitle } = props
  console.log(props)
  return (
    <>
      <StyledToolbar>
        <div style={{ margin: 'auto' }}>
          <Typography
            component="h2"
            variant="h2"
            color="inherit"
            align="center"
            noWrap
            className={'toolbartitlebold'}
          >
            {title}
          </Typography>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={'toolbartitle'}
          >
            {subTitle}
          </Typography>
        </div>
        <Buttons {...props} />
      </StyledToolbar>
      <StyledToolbarSecondary component="nav" variant="dense">
        {sections.map(section => (
          <Link
            key={section.title}
            to={section.url}
            className={'toolbarlink'}
            theme={props.theme}
          >
            {section.title}
          </Link>
        ))}
      </StyledToolbarSecondary>
    </>
  )
}

export default Header

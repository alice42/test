import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

function Copyright(props) {
  const { theme } = props
  return (
    <Typography
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        borderColor: theme.color
      }}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {'Copyright © '}
      <Link
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          borderColor: theme.color
        }}
        color="inherit"
        href="#"
      >
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    borderTop: `1px solid ${theme.palette.divider}`
  }
}))

export default function Footer(props) {
  const classes = useStyles()
  const { description, title, theme } = props

  return (
    <footer
      className={classes.footer}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        borderColor: theme.color
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            borderColor: theme.color
          }}
        >
          {description}
        </Typography>
        <Copyright theme={theme} />
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string
}

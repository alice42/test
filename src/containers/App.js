import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from './theme-context'

const App = props => {
  const { theme, toggle, dark } = React.useContext(ThemeContext)

  const { t, i18n } = useTranslation()
  const changeLanguage = () => {
    const lng = window.localStorage.i18nextLng === 'fr' ? 'en' : 'fr'
    i18n.changeLanguage(lng)
  }
  const sections = [
    { title: t('resume link'), url: '/resume' },
    { title: t('projects link'), url: '/projects' }
  ]
  return (
    <Container
      disableGutters
      maxWidth="lg"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Header
        title="Alice Martin"
        subTitle={t('subtitle header')}
        sections={sections}
        changeLanguage={changeLanguage}
        toggleTheme={toggle}
        dark={dark}
        theme={theme}
      />
      <Switch>
        <Route exact path="/">
          <Redirect to="/resume" />
        </Route>
        <Route path="/:id" exact children={<Content theme={theme} />} />
      </Switch>
      <Footer
        theme={theme}
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </Container>
  )
}

export default App

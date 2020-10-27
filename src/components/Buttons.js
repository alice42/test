import React from 'react'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { StyledButton, StyledButtonsWrapper } from './styles/StyledComponents'

export default function Buttons(props) {
  const { changeLanguage, theme, dark, toggleTheme } = props
  return (
    <>
      <StyledButtonsWrapper>
        <div className={'group'}>
          <StyledButton
            theme={theme}
            title={`${
              window.localStorage.i18nextLng === 'fr'
                ? 'Traduire en Anglais'
                : 'Translate to French'
            }`}
            onClick={() => changeLanguage()}
          >
            {window.localStorage.i18nextLng.toUpperCase()}
          </StyledButton>
          <StyledButton
            theme={theme}
            title={'Dark Theme'}
            onClick={() => toggleTheme()}
          >
            {!dark ? <Brightness7Icon /> : <Brightness4Icon />}
          </StyledButton>
        </div>
        <div className={'group'}>
          <StyledButton theme={theme}>
            <LinkedInIcon />
          </StyledButton>
          <StyledButton theme={theme}>
            <GitHubIcon />
          </StyledButton>
        </div>
      </StyledButtonsWrapper>
    </>
  )
}

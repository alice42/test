import React from 'react'
import {
  StyledAnim,
  StyledDiagonal,
  StyledTitleRight,
  StyledTextRight,
  StyledTitleLeft,
  StyledTextLeft
} from './styles/StyledContent'
import { Trans } from 'react-i18next'
import { StyledButton, StyledButtonsWrapper } from './styles/StyledComponents'

const Cv = props => {
  const { theme } = props
  return (
    <>
      <StyledAnim theme={theme}>
        <StyledDiagonal spacing={0} size={33} />
        <StyledTitleRight spacing={0} size={33}>
          <Trans i18nKey="cv part1 title" />
        </StyledTitleRight>
        <StyledTextRight spacing={0} size={33}>
          <Trans i18nKey="cv part1 content" />
        </StyledTextRight>

        <StyledDiagonal spacing={36} size={33} />
        <StyledTitleRight spacing={36}>
          <Trans i18nKey="cv part2 title" />
        </StyledTitleRight>
        <StyledTextRight spacing={36}>
          <Trans i18nKey="cv part2 content" />
        </StyledTextRight>

        <StyledDiagonal styled={{ left: true }} spacing={7} size={15} />
        <StyledTitleLeft spacing={7}>
          <Trans i18nKey="cv part3 title" />
        </StyledTitleLeft>
        <StyledTextLeft spacing={7}>
          <Trans i18nKey="cv part3 content" />
        </StyledTextLeft>

        <StyledDiagonal styled={{ left: true }} spacing={30} size={15} />
        <StyledTitleLeft spacing={30}>
          <Trans i18nKey="cv part4 title" />
        </StyledTitleLeft>
        <StyledTextLeft spacing={30}>
          <Trans i18nKey="cv part4 content" />
        </StyledTextLeft>

        <StyledDiagonal styled={{ left: true }} spacing={55} size={15} />
        <StyledTitleLeft spacing={55}>
          <Trans i18nKey="cv part5 title" />
        </StyledTitleLeft>
        <StyledTextLeft spacing={55}>
          <Trans i18nKey="cv part5 content" />
        </StyledTextLeft>

        <StyledDiagonal styled={{ left: true }} spacing={96} size={15} />
        <StyledTitleLeft spacing={96}>
          <Trans i18nKey="cv part6 title" />
        </StyledTitleLeft>
        <StyledTextLeft spacing={96}>
          <Trans i18nKey="cv part6 content" />
        </StyledTextLeft>
      </StyledAnim>
    </>
  )
}

export default Cv

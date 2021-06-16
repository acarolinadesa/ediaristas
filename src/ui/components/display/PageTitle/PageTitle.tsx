import React from 'react'
import { Container } from '@material-ui/core'
import { PageTitleContainer } from './PageTitle.style'
import { PageTitleStyled } from './PageTitle.style'

interface PageTitleProps {
  title: string;
  subtitle?: string
}
const PageTitle: React.FC <PageTitleProps> = (props) => {

  return (
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      {props.subtitle}
    </PageTitleContainer>

  )
}

export default PageTitle;
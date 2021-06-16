/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FooterStyled, FooterContainer, FooterTitle, AppList} from './Footer.style'
import { Typography, Box } from '@material-ui/core'

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{maxWidth: '400px'}}>
        <FooterTitle>Quem somos</FooterTitle>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque porro minus soluta quis debitis velit beatae odit dolore, sint illo reprehenderit at eaque veritatis aut eos quod repellat doloremque totam.
        </Typography>
        </Box>

        <Box sx={{maxWidth: '400px'}}>
        <FooterTitle>Baixe nossos aplicativos</FooterTitle>
        <AppList>
          <li>
            <a href= {'/'} target={'_blank'} rel={'noopener noreferrer'}>
              <img src={'/img/logos/app-store.png'} alt={'AppStore'}/>
            </a>
          </li>
          <li>
            <a href= {'/'} target={'_blank'} rel={'noopener noreferrer'}>
              <img src={'/img/logos/google-play.png'} alt={'GooglePlay'}/>
            </a>
          </li>
        </AppList>
        </Box>
      </FooterContainer>
    </FooterStyled>
  )
}

export default Footer
import { experimentalStyled as styled } from '@material-ui/core/styles'

export const PageTitleContainer = styled('div')`
  text-align: center;
  margin: 40px 0;
`
export const PageTitleStyled = styled('h2')`
  margin: 0;
  font-weight: 600;
  // padronizacao de estilo do MATERIAL UI
  color: ${({theme}) => theme.palette.primary.main };
  font-size: ${({theme}) => theme.typography.h6.fontSize };


  ${({theme}) => theme.breakpoints.down('md') } {
    font-size: ${({theme}) => theme.typography.body1.fontSize };
  }
`


import { experimentalStyled as styled} from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

export const FormElementsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacing(4)};
  max-width: 650px;
  margin: 0 auto ${({theme}) => theme.spacing(7)};
  /* margin: margem de cima | margem lateral | margem de baixo */
`

export const ProfissionalPaper = styled(Paper)`
  padding: ${({theme}) => theme.spacing(7)};
  margin: 0 auto ${({theme}) => theme.spacing(10)};

  ${({theme}) => theme.breakpoints.down('md')} {
    /*root acessa a raiz e sobrescreve a classe. & serve para acessar um elemento que e dele proprio e nao um filho*/
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }
  }

`

export const ProfissionalContainers = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  ${({theme}) => theme.breakpoints.up('md')} {
    grid-template-columns: repeat(2, 2fr); /*fr e a fracao que pega o espaco disponivel */
    gap: ${({theme}) => theme.spacing(6)};
  };

  ${({theme}) => theme.breakpoints.down('md')} {
    margin-left: ${({theme}) => theme.spacing(-2)};
    margin-right: ${({theme}) => theme.spacing(-2)};
    /* colocar cores diferentes em cada item
    seleciona todos os elementos de um determinado tipo
    odd - elementos impares | even - elementos pares*/
    > :nth-of-type(odd) {
      background-color: ${({theme}) => theme.palette.background.paper}
    }
  };

`

import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/display/PageTitle/PageTitle'
import UserInformation from 'ui/components/display/UserInformation/UserInformation'
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask'
import { Button, Typography, Container } from '@material-ui/core'
import { FormElementsContainer, ProfissionalPaper, ProfissionalContainers } from 'ui/styles/pages/index.style'
export default function Home() {
  return (
    <div>
      <SafeEnvironment/>
      <PageTitle
        title = { 'Conheça os profissionais'}
        subtitle = { 'Preencha seu endereço e veja todos os profissionais da sua localidade' } />

      <Container>

        <FormElementsContainer>
            <TextFieldMask mask= {'99.999-999'} label={'Digite seu CEP:'} fullWidth variant={'outlined'}/>
            <Typography color={'error'}>CEP inválido</Typography>
            <Button variant={'contained'} color={'secondary'} sx={{width:'220px'}}>Buscar</Button>
        </FormElementsContainer>

        <ProfissionalPaper>
          <ProfissionalContainers>
            <UserInformation
              username={'Primeiro Teste'}
              picture={'https://github.com/acarolren.png'}
              rating={3}
              description= {'Rio de Janeiro'}
              />
            <UserInformation
              username={'Segundo Teste'}
              picture={''}
              rating={3}
              description= {'Rio de Janeiro'}
              />
            <UserInformation
              username={'Terceiro Teste'}
              picture={''}
              rating={3}
              description= {'Rio de Janeiro'}
            />
            <UserInformation
              username={'Quarto Teste'}
              picture={''}
              rating={3}
              description= {'Rio de Janeiro'}
            />
          </ProfissionalContainers>
        </ProfissionalPaper>
      </Container>
    </div>
  )
}

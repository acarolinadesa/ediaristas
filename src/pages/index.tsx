import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/display/PageTitle/PageTitle'
import UserInformation from 'ui/components/display/UserInformation/UserInformation'
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask'
import { Button, Typography, Container, CircularProgress} from '@material-ui/core'
import { FormElementsContainer, ProfissionalPaper, ProfissionalContainers } from 'ui/styles/pages/index.style'
import useIndex from 'data/hooks/pages/useIndex.page'


export default function Home() {
  // const { contador, setContador} = useIndex(5)
  const { cep, setCep, cepValido, error, resultSearch, loading, listItens, remainingItens, searchItens
  } = useIndex()

  return (
    <div>
      <SafeEnvironment/>
      <PageTitle
        title = { 'Conheça os profissionais'}
        subtitle = { 'Preencha seu endereço e veja todos os profissionais da sua localidade' } />

      <Container>
        {/* Contador: {contador}
        <button onClick={() => setContador(contador +1)}>Clique aqui</button> */}
          <FormElementsContainer>
          <TextFieldMask mask={'99.999-999'} label={'Digite seu CEP'} fullWidth variant={'outlined'} value={cep} onChange={(event) => setCep(event.target.value)}/>

          {error && <Typography color={'error'}>{error}</Typography>}
          <Button variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!cepValido || loading}
            onClick={() => searchItens(cep)}>
            {loading ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>

        {resultSearch && (listItens.length >0? (
        <ProfissionalPaper>
          <ProfissionalContainers>
              {listItens.map((item, index) => {
                <UserInformation
                  key={index}
                  username={item.fullName}
                  picture={item.profilePicture}
                  rating={item.rating}
                  description={item.city}
                  />
              })}

          </ProfissionalContainers>
          <Container sx={{textAlign: 'center'}}>
            {remainingItens > 0 && (
            <Typography sx={{mt: 5}}>
              ... e mais {remainingItens} {remainingItens > 1 ? 'profissionais atendem' : 'profissional atende'} no seu endereço.
            </Typography>
          )}

            <Button
            variant={'contained'}
            color={'secondary'}
            sx={{mt: 5}}
            > Contratar um profissional</Button>
          </Container>
        </ProfissionalPaper>
          ) : (
            <Typography align={'center'} color={'textPrimary'}>
                Ainda não temos nenhuma diarista disponível em sua região
            </Typography>
          ))}
        </Container>
    </div>
  )
}

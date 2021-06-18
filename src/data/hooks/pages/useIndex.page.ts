import { useState, useMemo} from 'react'
import { UserInterface } from 'data/@types/UserInterface'
import { ValidationService } from 'data/service/ValidationService'
import { ApiService } from 'data/service/ApiServer'

export default function useIndex() {
  // const [contador, setContador] = useState(5)
  // return { contador, setContador}

  const [cep, setCep] = useState(''),
      cepValido = useMemo(() => { return ValidationService.cep(cep) }, [cep]),
    // declaracao de variaveis dos estados
      [error, setError] = useState(''),
      [resultSearch, setResultSearch] = useState(false),
      [loading, setLoading] = useState(false),
      [listItens , setListItens] = useState([] as UserInterface[]),
      [remainingItens, setRemainingItens] = useState(0)

  // Funcao para busca de profissionais
  async function searchItens(cep: string) {
    setResultSearch(false)
    setLoading(true)
    setError('')

    try{
      // retorna um objeto com campo chamado data
      const { data } = await ApiService.get<{
        listItens : UserInterface[],
        remainingItens: number
      }>('/api/diaristas-cidade?cep' + cep.replace(/\D/g, ''))

      setListItens(data.listItens)
      setRemainingItens(data.remainingItens)
      setResultSearch(true)
      setLoading(false)
    }catch(error){
      setError('CEP nao encontrado. \nMensagem de erro:' + error)
      setLoading(false)
    }
  }

  return { cep, setCep, cepValido, error, resultSearch, loading, listItens, remainingItens, searchItens}
}
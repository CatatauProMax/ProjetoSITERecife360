import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import Input from '../../components/input'
import * as C from './styles'
import useAuth from '../../hooks/useAuth'
import GlobalStyle from '../../styles/global'

const Home = () => {
    const { signout } = useAuth()
    const navigate = useNavigate()

  
  return (
    <C.Container>
        <C.Title>Sobre</C.Title>
        <C.Texto>A cidade do Recife tem um grande potencial para crescer quando se fala de turismo, já que a cidade oferece uma gama de variedades de atrações e pontos turisticos aos visitantes. Visando tal crescimento, decidimos criar um aplicativo/site onde forneceria pontos turísticos, sendo eles públicos ou privados. Onde não havia as mesmas formas de interação com os usuários, em que eles fariam avaliação dos lugares e também dicas, informando especializados dos locais, fazendo com que a pessoa que está utilizando o aplicativo fique informada sobre aquele local.</C.Texto>
        <C.Title>Time: </C.Title>
        <C.Texto>Fábio Henrique S. Marques - 01 551939 <br></br>Gabriel Henrique dos Santos Oliveira - 01607719 <br></br>Cauã Ferreira -01597629<br></br> Danilo Leite - 01 608104 <br></br>Geraldo Neto - 01 600900 <br></br>Thiago José Falcão de Freitas - 01 597267 <br></br>Hugo Duarte - 01635828 <br></br>Caio Gomes Ferrão D'Avila - 01 600639</C.Texto>
        <C.Texto>Repositório: <a target="_blank" href="https://github.com/CatatauProMax/ProjetoSITERecife360">https://github.com/CatatauProMax/ProjetoSITERecife360</a></C.Texto>
    </C.Container>
  )
}

export default Home
import {useState} from 'react'
import './Form.css'
import TextField from '../TextField'
import DropdownList from '../DropdownList'
import TheFormButton from '../FormButton'

const Form = () => {

    const teams = [
        'Team 1',
        'Team 2',
        'Team 3',
        'Team 4'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [team, setTeam] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('form submetido: ', nome, cargo, imagem, team)
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <DropdownList
                    obrigatorio={true} 
                    label="Time" 
                    itens={teams}
                    valor={team}
                    aoAlterado={valor => setTeam(valor)}
                />
                <TheFormButton texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Form
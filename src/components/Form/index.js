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

    const aoSalvar = (evento) => {
        evento.preventDefault()
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropdownList label="Time" itens={teams}/>
                <TheFormButton texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Form
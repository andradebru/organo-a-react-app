import { AiFillCloseCircle } from 'react-icons/ai'
import './Pessoa.css'

const Pessoa = ({ nome, imagem, cargo, corDeFundo, deletarPessoa, id}) => {
    return (<div className='pessoa'>
        <AiFillCloseCircle size={25} className='delete' 
        onClick={() => deletarPessoa(id)} />
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Pessoa
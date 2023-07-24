import './Pessoa.css'

const Pessoa = ({ nome, imagem, cargo, corDeFundo, deletarPessoa}) => {
    return (<div className='pessoa'>
        <div className='delete' 
        onClick={deletarPessoa}>
            deletar
        </div>
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
import './Team.css'
import Pessoa from '../Pessoa'

const Team = (props) => {
    return (
        (props.pessoas.length > 0) && 
        <section className='team' style={{ backgroundColor: props.corSecundaria}}>
            {/* <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} value={props.corSecundaria} type='color' className='input-color' /> */}
             <h3 style={{ borderColor: props.corPrimaria }}>
                {props.nome}
            </h3>
            <div className='pessoas'>
                {props.pessoas.map( pessoa => {
                    return < Pessoa 
                        key={pessoa.nome} 
                        corDeFundo={props.corPrimaria} 
                        nome={pessoa.nome}
                        cargo={pessoa.cargo} 
                        imagem={pessoa.imagem}
                        deletarPessoa={props.aoDeletar}
                    />
                })}
            </div>
        </section>
    )
}

export default Team
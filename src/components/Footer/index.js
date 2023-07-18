import './Footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='social'>
                <a href='' target="_blank"><img src='imagens/fb.png' alt='' /></a>
                <a href='' target="_blank"><img src='imagens/tw.png' alt='' /></a>
                <a href='' target="_blank"><img src='imagens/ig.png' alt='' /></a>
            </div>
            <div className='footer'>
                <img src='imagens/logo.png' alt='' />
            </div>
            <div>
                <p>Desenvolvido por Bruna, sobre template e curso da Alura.</p>
            </div>        
        </section>
    )
}

export default Footer
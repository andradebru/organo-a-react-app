import './Footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src="/imagens/fb.png" alt="" />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <img src="/imagens/tw.png" alt="" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src="/imagens/ig.png" alt="" />
                </a>
            </li>
        </ul>
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
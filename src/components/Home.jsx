import '../styles/home.css'

export const Home = () => {
  return(
    <section data-testid="home-container" className="home-container">
      <div data-testid="cover-home" className='home-container__cover'></div>
      <div className='container-contact-icon'>
          <a href="https://t.me/Yeinthony" target='_blank' rel='noreferrer'>
            <i data-testid="icon-contact" className='bx bxl-telegram'></i>
          </a>
          <a href="https://discordapp.com/users/796375277211090945" target='_blank' rel='noreferrer'>
            <i data-testid="icon-contact" className="bx bxl-discord-alt"></i>
          </a>
          <a href="https://www.linkedin.com/in/yeinthony-vargas-700987221/" target='_blank' rel='noreferrer'>
            <i data-testid="icon-contact" className='bx bxl-linkedin'></i>
          </a>
          <a href="https://github.com/Yeinthony" target='_blank' rel='noreferrer'>
            <i data-testid="icon-contact" className='bx bxl-github'></i>
          </a>
        </div>
      <div className='home-content'>
        <div className='title-container'>
          <h1>YEINTHONY VARGAS</h1>
          <div className='subtitle-container'>
            <div></div>
            <h2>Full Stack Developer</h2>
            <div></div>
          </div>
        </div>
        <div className='download-cv-button-container'>
          <a href="files/CV-Yeinthony-Vargas.pdf" download="CV-Yeinthony-Vargas" className='primary-button-md'>
            <span>Descargar CV</span>
          </a>
        </div>
      </div>
    </section>
  )
}
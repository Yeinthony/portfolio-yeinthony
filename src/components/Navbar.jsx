import '../styles/navbar.css';
import iconWolf1 from '../assets/img/icons/icon-wolf1.png';

export const Navbar = () => {
  return(
    <>
      <header data-testid="navbar-container">

        <a data-testid="home-link" href="#" className="logo">
          <img src={iconWolf1} alt="Logo-Yeinthony" />
          {/* <span>YeinDev</span> */}
        </a>

        <input data-testid="menu-bar-button" type="checkbox" className="trans-bar" id="menu-bar" />
        <label htmlFor="menu-bar" className="fa fa-bars trans-bar"></label>

        <nav className="nav-bar">
          <a role="menuitem" className='navbar-link' href="#inicio">Inicio</a>
          <a role="menuitem" className='navbar-link' href="#sobre-mi">Sobre Mi</a>
          <a role="menuitem" className='navbar-link' href="#habilidades">Habilidades</a>
          <a role="menuitem" className='navbar-link' href="#experiencia">Experiencia</a>
          <a role="menuitem" className='navbar-link' href="#contactame">Contactame</a>
        </nav>
      </header>
    </>
  )
}
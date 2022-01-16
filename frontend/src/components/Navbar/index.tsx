import { ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar(){
    return(   <header>
        <nav className="container">
          <div className='dsmovie-nav-content'>
            <h1>LC - MovieList</h1>
            <a href="https://github.com/leandro518/dsmovie">
              <div className='dsmovie-contact-container'>
                <GithubIcon />
                <p className='dsmovie-contact-link'>/leandro518</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
      );
}

export default Navbar;
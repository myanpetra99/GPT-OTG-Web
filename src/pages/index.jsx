import '../styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../components/navbar';  // import Navbar

function App() {
  return (
    <>
      <Navbar /> 
      <div className  ='container'>
      <h1 className='brand title-hero'>GPT-OTG</h1>
      <p className="sub">
        Your AI browsing companion<br />
      </p>
      <div className="card">
        <a href='https://chrome.google.com/webstore/detail/gpt-otg-development-build/fmibenbpkickilfocjdghokdnkmolhfi?hl=en&authuser=0'>
          <button className='button'>
            Download The Extension (BETA)
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </a>
        <a href='https://github.com/myanpetra99/GPT-OTG'>
          <button className='button'>
            Github  
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </a>
      </div>
      </div>
    </>
  );
}

export default App;

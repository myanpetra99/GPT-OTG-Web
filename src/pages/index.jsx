
import '../styles/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <>
      <h1 className='brand title-hero'>GPT-OTG</h1>
      <p className="sub">
        Ask the AI anywhere and anytime. <br />
      </p>
      <div className="card">
        <a href='https://github.com/myanpetra99/gpt-otg/releases/latest/download/gpt-otg.crx'><button> Download The Extension<FontAwesomeIcon icon={faDownload} /></button></a>
        <a href='https://github.com/myanpetra99/GPT-OTG'><button> Github  <FontAwesomeIcon icon={faGithub} /> </button></a>
      </div>
    </>
  )
}

export default App

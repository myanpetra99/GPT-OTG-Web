
import '../styles/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { getLatestRelease } from '../scripts/services';
import { useEffect, useState } from 'react';

function App() {

  const [latestRelease, setLatestRelease] = useState('')
 
useEffect(() => {
  const fetchLatestRelease = async () => {
    const data = await getLatestRelease();
    setLatestRelease(data);
  }

  fetchLatestRelease();
}, []);

  return (
    <>
      <h1 className='brand title-hero'>GPT-OTG</h1>
      <p className="sub">
        Ask the AI anywhere and anytime. <br />
      </p>
      <div className="card">
        <a href='https://github.com/myanpetra99/gpt-otg/releases/latest/download/gpt-otg.crx'><button> Download The Extension {latestRelease} <FontAwesomeIcon icon={faDownload} /></button></a>
        <a href='https://github.com/myanpetra99/GPT-OTG'><button> Github  <FontAwesomeIcon icon={faGithub} /> </button></a>
      </div>
    </>
  )
}

export default App

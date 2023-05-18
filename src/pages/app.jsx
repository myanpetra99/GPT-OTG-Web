
import '../styles/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faContactCard } from '@fortawesome/free-solid-svg-icons';


function App() {

  return (
    <>
      <h1>You've successfully installed the <span className='brand'>GPT-OTG</span> extension!🎉</h1>
      <p>
       Give it a try
      </p>
      <div className="box">
        <input type="text" placeholder='try to type `/ai` here and ask `who made first computer`'></input>
        <p>or</p>
        <textarea rows={5} placeholder='try to type `/typeai` here and say `write me a recommendation letter'></textarea>

        <div className='block'>
        <p>
       Have anything in mind?
      </p>
           <div className='center'>
          <a href='https://linktr.ee/myanpetra99?utm_source=linktree_admin_share'><button>Contact <FontAwesomeIcon icon={faContactCard} /></button></a>
          <a href='https://saweria.co/myanpetra99'><button>Buy me a coffee <FontAwesomeIcon icon={faCoffee} /></button></a>
        </div>
        </div>
       
      </div>
    </>
  )
}

export default App

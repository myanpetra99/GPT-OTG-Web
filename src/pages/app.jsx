import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faContactCard } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Navbar from "../components/navbar"; // import Navbar
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="installed">
          <h1>
            You've successfully installed the{" "}
            <span className="brand">GPT-OTG</span> extension!🎉
          </h1>
          <Tabs>
            <TabList>
              <Tab>Keyboard Control</Tab>
              <Tab>Mouse Control</Tab>
              <Tab>Summarize a youtube video?</Tab>
            </TabList>

            <TabPanel>
              <div className="box">
                <h2>Don't want to touch your mouse?</h2>
                <input
                  type="text"
                  placeholder="try to type `/ai` here and ask `who made first computer`"
                ></input>
                <p>or</p>
                <h2>it will type for you</h2>

                <h5>You can use it anywhere, twitter, gmail, etc~</h5>
                <textarea
                  rows={15}
                  placeholder="try to type `/typeai` here and say `write me a recommendation letter"
                ></textarea>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <h2>Try to summarize! </h2>
                <h5>1. block the paragraph below</h5>
                <h5>2. right click and choose `summarize AI`</h5>
                <card>
                  <p>
                    GPT (Generative Pre-trained Transformer) is a natural
                    language processing algorithm that was released by the
                    American company OpenAI. The first GPT was introduced in
                    2018 by OpenAI1. The main feature of a neural network is its
                    ability to memorize and analyze information, creating a
                    coherent and logical text on its basis2. In December 2015,
                    OpenAI was co-founded by Elon Musk, Sam Altman (CEO), Greg
                    Brockman (Chairman and President), Ilya Sutskever, John
                    Schulman, and Wojciech Zaremba. These founders shared the
                    same idea, that AI has enormous potential to bring about
                    positive change, but they were also aware of the significant
                    risks that needed to be considered3. The Evolution of GPT
                    Models: 2018: OpenAI releases GPT-1, a language model with
                    117 million parameters trained on a dataset of approximately
                    8 million web pages. 2019: OpenAI releases GPT-2, a more
                    powerful version of GPT-1 that was trained on a much larger
                    dataset of approximately 40 GB of text and has 1.5 billion
                    parameters. 2020: OpenAI releases GPT-3, which is
                    significantly larger and more powerful than GPT-2. It was
                    trained on an even larger dataset of approximately 570 GB of
                    text and has 175 billion parameters. 2021: OpenAI’s Codex
                    was released, a language model trained on code with 6
                    billion parameters and 800 million lines of code, powers
                    GitHub Copilot, an AI-powered code completion tool. In 2022,
                    OpenAI released ChatGPT3.
                  </p>
                </card>

                <p>or</p>
                <h5>1. right click Anywehere and choose Chat AI</h5>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="block">
                <h2>Yes, you right!</h2>
                <p>find the summarize button, and click it!</p>
                <img
                  width="988"
                  alt="image"
                  src="https://github.com/myanpetra99/GPT-OTG/assets/57763111/30826c31-beb2-4731-a16e-9f15af5246b2"
                ></img>
                <img
                  width="534"
                  alt="image"
                  src="https://github.com/myanpetra99/GPT-OTG/assets/57763111/699cc46a-93ef-4062-a19e-7c677b38b34c"
                ></img>
              </div>
            </TabPanel>
          </Tabs>
          <hr></hr>
          <div className="block">
            <p>Have anything in mind?</p>
            <div className="center">
              <a href="https://linktr.ee/myanpetra99?utm_source=linktree_admin_share">
                <button className="button">
                  Contact <FontAwesomeIcon icon={faContactCard} />
                </button>
              </a>
              <a href="https://saweria.co/myanpetra99">
                <button className="button">
                  Buy me a coffee <FontAwesomeIcon icon={faCoffee} />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="not-installed">
        <h1 >
          Looks like You haven't installed the <span className="brand">GPT-OTG</span>{" "}
          extension yet!😭
        </h1>
        <span>
            <NavLink
              to="/"
              exact
              activeStyle={{
                fontWeight: "bold",
                color: "green",
              }}
            >
              Back to Home
            </NavLink>
          </span>
        </div>
       
      </div>
    </>
  );
}

export default App;

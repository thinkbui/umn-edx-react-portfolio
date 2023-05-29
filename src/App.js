import { useState } from "react"
import AboutMe from "./components/AboutMe"
import CodeExamples from "./components/CodeExamples";
import Contact from "./components/Contact"
import logo from './logo.svg';
import './App.css';

function App() {
  const [ mainTab, setMainTab ] = useState("about-me")

  function switchTab(tab_name) {
    console.log(`Switching to ${tab_name}`);
    setMainTab(tab_name);
  }

  return (
    <>
      <header>
        <img src="./assets/images/headshot.jpeg" />
        <h1>Ian Bui</h1>
        <nav>
          <ul>
            <li><a onClick={() => switchTab("about-me")}>About Me</a></li>
            <li><a onClick={() => switchTab("code-examples")}>Code Examples</a></li>
            <li><a onClick={() => switchTab("contact")}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        { mainTab === "about-me" && <AboutMe /> }
        { mainTab == "code-examples" && <CodeExamples /> }
        { mainTab == "contact" && <Contact /> }
      </main>

      <footer>
        Ian Bui 2023
      </footer>
    </>
 );
}

export default App;

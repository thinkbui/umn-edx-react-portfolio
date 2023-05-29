import { useState } from "react"
import Header from "./components/Header"
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
      <Header switchTab={switchTab}/>
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

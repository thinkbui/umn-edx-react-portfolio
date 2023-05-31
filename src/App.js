import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import './App.css';

function App() {
  // Since both the Header and Main components use this state, must keep this in root.
  const [ mainTab, setMainTab ] = useState("about_me")

  function switchTab(tab_name) {
    console.log(`Switching to ${tab_name}`);
    setMainTab(tab_name);
  }

  return (
    <>
      <Header
        switchTab={switchTab}
        mainTab={mainTab}
      />
      <Main
        mainTab={mainTab}
      />
      <Footer />
    </>
 );
}

export default App;

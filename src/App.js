import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { examples_list } from "./constants/Constants"
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
      <Main mainTab={mainTab} examples_list={examples_list} />
      <Footer />
    </>
 );
}

export default App;

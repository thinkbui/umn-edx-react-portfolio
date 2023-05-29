import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { headshot_src, header_name, tab_names, about_me_bio, examples_list, contact_options, resume_content, footer_text } from "./constants/Constants"
import './App.css';

function App() {
  const [ mainTab, setMainTab ] = useState("about-me")

  function switchTab(tab_name) {
    console.log(`Switching to ${tab_name}`);
    setMainTab(tab_name);
  }

  return (
    <>
      <Header
        switchTab={switchTab}
        headshot_src={headshot_src}
        header_name={header_name}
        tab_names={tab_names}
      />
      <Main
        mainTab={mainTab}
        tab_names={tab_names}
        about_me_bio={about_me_bio}
        examples_list={examples_list}
        contact_options={contact_options}
        resume_content={resume_content}
      />
      <Footer
        footer_text={footer_text}
      />
    </>
 );
}

export default App;

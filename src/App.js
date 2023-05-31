import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { headshot_src, header_name, tab_list, tab_data, about_me_headshot_src, about_me_bio, examples_list, contact_options, resume_content, resume_link, footer_text } from "./constants/Constants"
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
        headshot_src={headshot_src}
        header_name={header_name}
        tab_list={tab_list}
        tab_data={tab_data}
        mainTab={mainTab}
      />
      <Main
        mainTab={mainTab}
        tab_list={tab_list}
        tab_data={tab_data}
        about_me_headshot_src={about_me_headshot_src}
        about_me_bio={about_me_bio}
        examples_list={examples_list}
        resume_content={resume_content}
        resume_link={resume_link}
      />
      <Footer
        contact_options={contact_options}
        footer_text={footer_text}
      />
    </>
 );
}

export default App;

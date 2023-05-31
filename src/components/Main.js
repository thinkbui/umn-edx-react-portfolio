import AboutMe from "./Main/AboutMe";
import Portfolio from "./Main/Portfolio";
import Contact from "./Main/Contact";
import Resume from "./Main/Resume";
import { tab_data } from "./../constants/Constants"

function Main(props) {
  return (
    <main>
      {/* TODO: Is there a way to condense this to a loop? */}
      { props.mainTab === tab_data.about_me.key &&
        <AboutMe />
      }
      { props.mainTab === tab_data.portfolio.key &&
        <Portfolio />
      }
      { props.mainTab === tab_data.contact.key &&
        <Contact />
      }
      { props.mainTab === tab_data.resume.key &&
        <Resume />
      }
    </main>
  );
}
  
export default Main;

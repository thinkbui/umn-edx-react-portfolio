import AboutMe from "./Main/AboutMe";
import Portfolio from "./Main/Portfolio";
import Contact from "./Main/Contact";
import Resume from "./Main/Resume";

function Main(props) {
  return (
    <main>
      { props.mainTab === "about_me" &&
        <AboutMe
          about_me_headshot_src={props.about_me_headshot_src}
          about_me_bio={props.about_me_bio}
          tab_name={props.tab_names.about_me}
        />
      }
      { props.mainTab === "portfolio" &&
        <Portfolio
          examples_list={props.examples_list}
          tab_name={props.tab_names.portfolio}
        />
      }
      { props.mainTab === "contact" &&
        <Contact
          tab_name={props.tab_names.contact}
        />
      }
      { props.mainTab === "resume" &&
        <Resume
          resume_content={props.resume_content}
          resume_link={props.resume_link}
          tab_name={props.tab_names.resume}
        />
      }
    </main>
  );
}
  
export default Main;

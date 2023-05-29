import AboutMe from "./Main/AboutMe"
import Portfolio from "./Main/Portfolio";
import Contact from "./Main/Contact"

function Main(props) {
  return (
    <main>
      { props.mainTab === "about-me" && <AboutMe about_me_bio={props.about_me_bio} /> }
      { props.mainTab === "portfolio" && <Portfolio examples_list={props.examples_list} /> }
      { props.mainTab === "contact" && <Contact contact_options={props.contact_options} /> }
    </main>
  );
}
  
export default Main;

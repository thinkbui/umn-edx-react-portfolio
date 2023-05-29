import AboutMe from "./Main/AboutMe"
import CodeExamples from "./Main/CodeExamples";
import Contact from "./Main/Contact"

function Main(props) {
  return (
    <main>
      { props.mainTab === "about-me" && <AboutMe about_me_bio={props.about_me_bio} /> }
      { props.mainTab === "portfolio" && <CodeExamples examples_list={props.examples_list} /> }
      { props.mainTab === "contact" && <Contact contact_options={props.contact_options} /> }
    </main>
  );
}
  
export default Main;

import AboutMe from "./MainTabs/AboutMe"
import CodeExamples from "./MainTabs/CodeExamples";
import Contact from "./MainTabs/Contact"

function Main(props) {
  return (
    <main>
      { props.mainTab === "about-me" && <AboutMe /> }
      { props.mainTab == "code-examples" && <CodeExamples /> }
      { props.mainTab == "contact" && <Contact /> }
    </main>
  );
}
  
export default Main;

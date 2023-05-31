import Project from './Portfolio/Project'

function Portfolio(props) {
  return (
    <section id="portfolio">
      <div className="heading">
        <h2>{props.tab_name}</h2>
      </div>
      <div className="content">
        {props.examples_list.map((example) => <Project key={example.key} example={example} />)}
      </div>
    </section>
  );
}
  
export default Portfolio;

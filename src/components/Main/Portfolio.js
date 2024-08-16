import Project from './Portfolio/Project'
import { tab_data, examples_list } from '../../constants/Constants';

function Portfolio(props) {
  return (
    <section id="portfolio">
      <div className="heading">
        <h2>{tab_data.portfolio.name}</h2>
      </div>
      <div className="content">
        {examples_list.map((example) => <Project key={example.key} example={example} />)}
      </div>
    </section>
  );
}
  
export default Portfolio;

import Example from './CodeExamples/Example'

const examples_list = [
  {
    "title": "Live Events API (Group Project)",
    "link": "https://github.com/JacobDNelsonStone/live-music-search-ticketmaster-api",
    "image": 'assets/images/live-events-api.png'
  },
  {
    "title": "Weather Dashboard",
    "link": "https://github.com/thinkbui/umn-edx-weather-dashboard",
    "image": 'assets/images/weather-dashboard.png'
  },
  {
    "title": "Workday Scheduler",
    "link": "https://github.com/thinkbui/umn-edx-work-day-scheduler",
    "image": 'assets/images/workday-scheduler.png'
  },
  {
    "title": "Timed Quiz",
    "link": "https://github.com/thinkbui/umn-edx-timed-quiz",
    "image": 'assets/images/timed-quiz.png'
  },
  {
    "title": "Password Generator",
    "link": "https://github.com/thinkbui/umn-edx-password-generator",
    "image": 'assets/images/password-generator.png'
  },
  {
    "title": "Refactor Challenge",
    "link": "https://github.com/thinkbui/umn-edx-module-1-challenge-code-refactor",
    "image": 'assets/images/refactor-challenge.png'
  },
]

function CodeExamples(props) {
  return (
    <section id="code-examples">
      <div className="heading">
        <h2>Code Examples</h2>
      </div>
      <div className="content">
        {examples_list.map((example) => <Example example={example} />)}
      </div>
    </section>
  );
}
  
export default CodeExamples;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header>
        <img src="./assets/images/headshot.jpeg" />
        <h1>Ian Bui</h1>
        <nav>
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#code-examples">Code Examples</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <article id="about-me">
          <div class="heading">
            <h2>About Me</h2>
          </div>
          <div class="content">
            <p>I am a web developer based in the Twin Cities area in Minnesota.  Although my professional experience has been in Ruby on Rails, I have knowledge in the MERN Stack and can easily pick up new technologies.</p>
          </div>
        </article>
        <section id="code-examples">
          <div class="heading">
            <h2>Code Examples</h2>
          </div>
          <div class="content">
            <a href="https://github.com/JacobDNelsonStone/live-music-search-ticketmaster-api" style={{backgroundImage: "url('assets/images/live-events-api.png')"}}>
              <div class="example-code">
                <h3>Live Events API (Group Project)</h3>
              </div>
            </a>
            <a href="https://github.com/thinkbui/umn-edx-weather-dashboard" style={{backgroundImage: "url('assets/images/weather-dashboard.png')"}}>
              <div class="example-code">
                <h3>Weather Dashboard</h3>
              </div>
            </a>
            <a href="https://github.com/thinkbui/umn-edx-work-day-scheduler" style={{backgroundImage: "url('assets/images/workday-scheduler.png')"}}>
              <div class="example-code">
                <h3>Workday Scheduler</h3>
              </div>
            </a>
            <a href="https://github.com/thinkbui/umn-edx-timed-quiz" style={{backgroundImage: "url('assets/images/timed-quiz.png')"}}>
              <div class="example-code">
                <h3>Timed Quiz</h3>
              </div>
            </a>
            <a href="https://github.com/thinkbui/umn-edx-password-generator" style={{backgroundImage: "url('assets/images/password-generator.png')"}}>
              <div class="example-code">
                <h3>Password Generator</h3>
              </div>
            </a>
            <a href="https://github.com/thinkbui/umn-edx-module-1-challenge-code-refactor" style={{backgroundImage: "url('assets/images/refactor-challenge.png')"}}>
              <div class="example-code">
                <h3>Refactor Challenge</h3>
              </div>
            </a>
          </div>
      </section>
        <section id="contact">
          <div class="heading">
            <h2>Contact</h2>
          </div>
          <div>
            <div class="content">
              <ul>
                <li>
                  <a href="tel:5555555555">555-555-5555</a>
                </li>
                <li>
                  <a href="mailto:admin@example.com">admin@example.com</a>
                </li>
                <li>
                  <a href="">LinkedIn</a>
                </li>
                <li>
                  <a href="">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer>
        Ian Bui 2023
      </footer>
    </>
 );
}

export default App;

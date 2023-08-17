import { tab_data, resume_content, resume_link } from "./../../constants/Constants"

function Resume(props) {
  return (
    <section id="resume">
      <div className="heading">
        <h2>{tab_data.resume.name}</h2>
      </div>
      <div className="content">
        <div className="resume_content">
          {resume_content.map((paragraph) => <p key={paragraph.key} className="trail_space">{paragraph.content}</p>)}
        </div>
        {/* <div className="resume_link">
          <a href={resume_link.link} target="_blank">{resume_link.text}</a>
        </div> */}
      </div>
    </section>
  );
}
  
export default Resume;

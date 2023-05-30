function Resume(props) {
  return (
    <section id="resume">
      <div className="heading">
        <h2>{props.tab_name}</h2>
      </div>
      <div className="content">
        <div className="resume_content">
          {props.resume_content.map((paragraph) => <p key={paragraph.key} className="trail_space">{paragraph.content}</p>)}
        </div>
        <div className="resume_link">
          <a href={props.resume_link.link} target="_blank">{props.resume_link.text}</a>
        </div>
      </div>
    </section>
  );
}
  
export default Resume;

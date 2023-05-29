function Resume(props) {
  return (
    <section id="resume">
      <div className="heading">
        <h2>{props.tab_name}</h2>
      </div>
      <div className="content">
        {props.resume_content.map((paragraph) => <p>{paragraph}</p>)}
      </div>
    </section>
  );
}
  
export default Resume;

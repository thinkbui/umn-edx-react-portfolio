function AboutMe(props) {
  return (
    <article id="about-me">
      <div className="heading">
        <h2>{props.tab_name}</h2>
      </div>
      <div className="content">
        {props.about_me_bio.map((paragraph) => <p>{paragraph}</p>)}
      </div>
    </article>
  );
}
  
export default AboutMe;

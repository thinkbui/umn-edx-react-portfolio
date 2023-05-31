function AboutMe(props) {
  return (
    <article id="about_me">
      <div className="heading">
        <h2>{props.tab_name}</h2>
      </div>
      <div className="content">
        <div className="grid">
          <div className="about-me-image">
            <img src={props.about_me_headshot_src} />
          </div>
          <div className="about-me-text">
            {props.about_me_bio.map((paragraph) => <p key={paragraph.key}>{paragraph.content}</p>)}
          </div>
        </div>
      </div>
    </article>
  );
}
  
export default AboutMe;

function AboutMe(props) {
  return (
    <article id="about-me">
      <div className="heading">
        <h2>{props.tab_name}</h2>
      </div>
      <div className="content">
        <img src={props.about_me_headshot_src} />
        {props.about_me_bio.map((paragraph) => <p key={paragraph.key}>{paragraph.content}</p>)}
      </div>
    </article>
  );
}
  
export default AboutMe;

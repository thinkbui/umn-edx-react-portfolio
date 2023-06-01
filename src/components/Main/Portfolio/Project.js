function Project(props) {
  return (
    <div className="card">
      <a
        href={props.example.link}
        className="example_main_link"
        style={{
          background: `linear-gradient(rgba(255, 144, 51, 0.20), rgba(255, 144, 51, 0.60)), url(${props.example.image}) no-repeat`,
          backgroundSize: 'cover'
        }}
        target="_blank"
      >
        <div className="example-code">
          <h3>{props.example.title}</h3>
        </div>
      </a>
      <a
        href={props.example.deployed_link}
        className="example_deployed_link"
        target="_blank"
      >
        🚀 Deployed App
      </a>
    </div>
  );
}
  
export default Project;

function Project(props) {
  function gradient_card(url) {
    return `linear-gradient(rgba(255, 144, 51, 0.40), rgba(255, 144, 51, 0.80)), url(${url}) no-repeat`
  }

  return (
    <div className="card">
      <a
        href={props.example.link}
        className="example_main_link"
        style={{
          background: props.example.image && gradient_card(props.example.image),
          backgroundSize: "cover"
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

function Project(props) {
  function gradient_card(url) {
    return `var(--card-gradient), url(${url}) 0 0/cover no-repeat`
  }

  return (
    <div className="card">
      <a
        href={props.example.link}
        className="example_main_link"
        style={{
          background: props.example.image && gradient_card(props.example.image)
        }}
        target="_blank"
      >
        <div className="example-code">
          <h3>{props.example.title}</h3>
          <div className="example-code-desc">{props.example.description}</div>
        </div>
      </a>
      {
        props.example.deployed_link ?
          <a
            href={props.example.deployed_link}
            className="example_deployed_link"
            target="_blank"
          >
            🚀 View Deployed App
          </a>
        :
          <p className="card-no-link">(not deployed)</p>
      }
    </div>
  );
}
  
export default Project;

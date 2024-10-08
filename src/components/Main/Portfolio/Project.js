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
        rel="noopener noreferrer"
      >
        <div className="example-code">
          <h3>{props.example.title}</h3>
          <div className="example-code-desc">{props.example.description}</div>
          <div className="example-code-tech">
            { props.example.tech ?
              `TECHNOLOGIES: ${props.example.tech}` : ""
            }
          </div>
        </div>
      </a>
      {
        props.example.decommissioned ? (
          <p className="card-no-link">(decommissioned)</p>
        ) : (
          props.example.deployed_link ?
            <a
              href={props.example.deployed_link}
              className="example_deployed_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 View Deployed App
            </a>
          :
            <p className="card-no-link">&nbsp;</p>
        )
      }
    </div>
  );
}
  
export default Project;

function CodeExample(props) {
  return (
    <div className="card">
      <a
        href={props.example.link}
        className="example_main_link"
        style={{backgroundImage: `url(${props.example.image})`}}
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
        Deployed Location
      </a>
    </div>
  );
}
  
export default CodeExample;

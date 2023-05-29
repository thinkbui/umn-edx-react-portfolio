function CodeExample(props) {
  return (
    <div className="card">
      <a href={props.example.link} className="example_main_link" style={{backgroundImage: `url(${props.example.image})`}}>
        <div className="example-code">
          <h3>{props.example.title}</h3>
        </div>
      </a>
      <a href={props.example.deployed_link} className="example_deployed_link">Deployed Location</a>
    </div>
  );
}
  
export default CodeExample;

function CodeExample(props) {
  return (
    <a href={props.example.link} style={{backgroundImage: `url(${props.example.image})`}}>
      <div className="example-code">
        <h3>{props.example.title}</h3>
      </div>
    </a>
  );
}
  
export default CodeExample;

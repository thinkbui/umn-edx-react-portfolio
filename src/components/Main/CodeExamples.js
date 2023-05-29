import Example from './CodeExamples/Example'

function CodeExamples(props) {
  return (
    <section id="code-examples">
      <div className="heading">
        <h2>Code Examples</h2>
      </div>
      <div className="content">
        {props.examples_list.map((example) => <Example example={example} />)}
      </div>
    </section>
  );
}
  
export default CodeExamples;

function Contact(props) {
  return (
    <section id="contact">
      <div className="heading">
        <h2>Contact</h2>
      </div>
      <div>
        <div className="content">
          <ul>
            {props.contact_options.map((option) => <li><a href={option.href}>{option.title}</a></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
  
export default Contact;

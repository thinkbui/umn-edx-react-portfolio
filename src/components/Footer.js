function Footer(props) {
  return (
    <footer>
      <div className="heading">
        <ul className="profile_links">
          {props.contact_options.map((option) => <li key={option.key}><a href={option.href}>{option.title}</a></li>)}
        </ul>
      </div>
      <p>
        {props.footer_text}
      </p>
    </footer>
  );
}
  
export default Footer;

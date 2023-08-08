import { contact_options, footer_text } from "../constants/Constants";

function Footer(props) {
  return (
    <footer>
      <div className="heading">
        <ul className="profile_links">
          {contact_options.map((option) => <li key={option.key}><a href={option.href} target="_blank" rel="noopener noreferrer">{option.title}</a></li>)}
        </ul>
      </div>
      <p>
        {footer_text}
      </p>
    </footer>
  );
}
  
export default Footer;

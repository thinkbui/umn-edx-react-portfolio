import { tab_data } from "../../constants/Constants";

function Contact(props) {
  return (
    <section id="contact">
      <div className="heading">
        <h2>{tab_data.contact.name}</h2>
      </div>
      <div>
        <div className="content">
          Please refer to my job application for contact information or use the messaging system in LinkedIn.
        </div>
      </div>
    </section>
  );
}
  
export default Contact;

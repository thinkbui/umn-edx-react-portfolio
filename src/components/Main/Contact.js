import { useState } from "react"
import { tab_data } from "../../constants/Constants";

function Contact(props) {
  const [ namePresence, setNamePresence ] = useState(true);
  const [ emailPresence, setEmailPresence ] = useState(true);
  const [ emailValid, setEmailValid ] = useState(true);
  const [ messagePresence, setMessagePresence ] = useState(true);

  function name_presence() {
    const name_value = document.getElementById("form_name").value
    setNamePresence(!!name_value);
  }

  function email_check() {
    email_presence();
    email_validity();
  }

  function email_presence() {
    const email_value = document.getElementById("form_email").value
    setEmailPresence(!!email_value);
  }

  function email_validity() {
    const email_value = document.getElementById("form_email").value
    setEmailValid(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i.test(email_value));
  }

  function message_presence() {
    const message_value = document.getElementById("form_message").value
    setMessagePresence(!!message_value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log("submit");
  }

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

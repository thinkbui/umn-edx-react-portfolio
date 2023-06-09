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
          <div className="form_warn trail_space">
            This form isn't currently operational.  Please contact me via LinkedIn in the meantime.
          </div>
          <form className="contact_form" onSubmit={formSubmitHandler}>
            <div>
              <label>Name:</label>
              <span className="form_warn">{namePresence ? "" : "Required"}</span>
            </div>
            <div>
              <input className="contact_form_input_text" type="text" id="form_name" name="name" onBlur={() => name_presence()}></input>
            </div>
            <div>
              <label>Email:</label>
              <span className="form_warn">{emailPresence ? (emailValid ? "" : "Invalid Email") : "Required"}</span>
            </div>
            <div>
              <input className="contact_form_input_text" type="text" id="form_email" name="email" onBlur={() => email_check()}></input>
            </div>
            <div>
              <label>Message:</label>
              <span className="form_warn">{messagePresence ? "" : "Required"}</span>
            </div>
            <div>
              <textarea className="contact_form_textarea" id="form_message" name="message" onBlur={() => message_presence()}></textarea>
            </div>
            <div>
              <input className="contact_form_submit" type="submit" value="Submit" disabled />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
  
export default Contact;

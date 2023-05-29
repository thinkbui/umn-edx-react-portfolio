import { useState } from "react"

function Contact(props) {
  const [ namePresence, setNamePresence ] = useState(true);
  const [ emailPresence, setEmailPresence ] = useState(true);
  const [ emailValid, setEmailValid ] = useState(true);

  function name_presence() {
    const name_value = document.getElementById("form_name").value
    if (name_value) {
      setNamePresence(true);
    } else {
      setNamePresence(false);
    }
  }

  function email_presence() {
    const name_value = document.getElementById("form_email").value
    if (name_value) {
      setEmailPresence(true);
    } else {
      setEmailPresence(false);
    }
  }

  function email_validity() {
    const name_value = document.getElementById("form_email").value
    if (name_value) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }

  return (
    <section id="contact">
      <div className="heading">
        <h2>{props.tab_name}</h2>
      </div>
      <div>
        <div className="content">
          <form>
            <label>Name:</label>
            <input type="text" id="form_name" name="name" onBlur={() => name_presence()}></input>
            <span className="form_warn">{namePresence ? "" : "Required"}</span>

            <label>Email:</label>
            <input type="text" id="form_email" name="email" onBlur={() => email_presence()}></input>
            <span className="form_warn">{emailPresence ? "" : "Required"}</span>

            <label>Message:</label>
            <input type=""></input>
          </form>
        </div>
      </div>
    </section>
  );
}
  
export default Contact;

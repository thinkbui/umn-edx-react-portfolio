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

  function email_check() {
    email_presence()
    email_validity()
  }

  function email_presence() {
    const email_value = document.getElementById("form_email").value
    if (email_value) {
      setEmailPresence(true);
    } else {
      setEmailPresence(false);
    }
  }

  function email_validity() {
    const email_value = document.getElementById("form_email").value
    if (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i.test(email_value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log("submit");
  }

  return (
    <section id="contact">
      <div className="heading">
        <h2>{props.tab_name}</h2>
      </div>
      <div>
        <div className="content">
          <div className="form_warn">
            This form isn't currently operational.  Please contact me via LinkedIn in the meantime.
          </div>
          <form onSubmit={formSubmitHandler}>
            <div>
              <label>Name:</label>
            </div>
            <div>
              <input type="text" id="form_name" name="name" onBlur={() => name_presence()}></input>
              <span className="form_warn">{namePresence ? "" : "Required"}</span>
            </div>
            <div>
              <label>Email:</label>
            </div>
            <div>
              <input type="text" id="form_email" name="email" onBlur={() => email_check()}></input>
              <span className="form_warn">{emailPresence ? (emailValid ? "" : "Invalid Email") : "Required"}</span>
            </div>
            <div>
              <label>Message:</label>
            </div>
            <div>
              <textarea id="form_message" name="message" rows="4" cols="50"></textarea>
            </div>
            <div>
              <input type="submit" value="Submit" disabled />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
  
export default Contact;

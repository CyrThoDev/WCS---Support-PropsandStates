import { useState } from "react";

import "./App.css";

function App() {
  const user = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(user);
  console.log(formData);

  //Les lignes 15 à 29 disparaitront une fois la fonction handleChange complétée
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  console.log(formData);

  return (
    <>
      <div className="contact-form">
        <h2>Contactez-nous</h2>
        <form>
          <label>Prénom</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstName}
            onChange={handleChange}
          />
          <label>Nom</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastName}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
}

export default App;

import {useState} from "react";
import FormInput from "../input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {
  signInWithGooglePopup,
  signInAuthEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./signin-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const signInGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("User not Found");
          break;
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="signin-container">
      <h2>I have an account</h2>
      <span>Sign in with your email & password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

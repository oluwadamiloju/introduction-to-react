import Input from "./Input";
import Button from "./Button";
import './App.css';
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";
import CreateAccountButton from "./CreateAccountButton";

function App() {
  return (
    <div className="App">
      <h3 id="welcome-text">Welcome<br /> Back!</h3>
      <Input label="Email" placeholder="Enter your email" /><br />
      <Input label="Password" placeholder="Enter your password" />
      <p id="forgot-pswd-link">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Forgot your password?</u></p><br />
      <Button />
      <p className="no-link-text first-alternative">or</p>
      <div className="buttons">
        <GoogleButton />
        <FacebookButton /><br /> <br /> <br />
      </div>
      <p className="no-link-text second-alternative">Don't have an account?</p>
      <CreateAccountButton />
    </div>
  );
}

export default App;

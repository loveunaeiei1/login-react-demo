import logo from './logo.svg';
import './App.css';
import { LabelComponent } from "./components/label-component/LabelComponent";
import { LoginComponent } from "./components/login-component/LoginComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LabelComponent />
        <LoginComponent />
      </header>
    </div>
  );
}

export default App;

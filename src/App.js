import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ProfileComponent } from './Component/Profile/ProfilePhoto';
import {FullNameComponent} from "./Component/Profile/FullName"
import { AdressComponent } from './Component/Profile/Adress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
<ProfileComponent/>
<br/><br/>
<FullNameComponent/>
<br/>
<AdressComponent/>

        </div>
      </header>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainloginS from "./Components/Home/MainloginS";
import MainloginT from "./Components/Home/MainloginT";
import Slogin from "./Components/Student/StudentLogin/Slogin";
import Sregs from "./Components/Student/StudentRegistration/Sregs";
import Tlogin from "./Components/Teacher/TeacherLogin/Tlogin";
import Tregs from "./Components/Teacher/TeacherRegistration/Tregs";

function App() {
  return (
    <div className="App">
      <div className="bg-blue-400 py-8">
        <h1 className="text-white font-black mx-4 text-3xl">TechoKids</h1>
      </div>

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chooseuserstudent" exact component={MainloginS} />
          <Route path="/chooseuserteacher" exact component={MainloginT} />

          {/* student */}
          <Route path="/loginstudent" exact component={Slogin} />
          <Route path="/registerstudent" exact component={Sregs} />

          {/* Teacher */}
          <Route path="/loginteacher" exact component={Tlogin} />
          <Route path="/registerteacher" exact component={Tregs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

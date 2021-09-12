import doc from './../doc.png';
import './../App.css';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import logo from './../logo.png';

function Home() {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!username || !password) {
      alert('Please enter valid username and password')
    }
    if(username == 'd' && password == 'd') {
        history.push("/dashboard-doc");
    }
    if(username == 'p' && password == 'p') {
        history.push("/dashboard-pat");
    }
  }

  const handleUChange = (e) => {
    setUserName(e.target.value);
  }

  function handlePChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <table>
        <tr>
          <td width="50%"><div className="logo">
              <img src={logo} style={{ height: '100px', width: '100px' }} />
            </div></td>
          <td width="30%">
            <table>
              <tr>
                <td className="pl10">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Home
                      <span class="caret"></span></button>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Genereal Doctor</a></li>
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Dentist</a></li>
                    </ul>
                  </div>
                </td>
                <td className="pl10">
                  <div class="dropdown">
                    <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Specialization
                      <span class="caret"></span></button>
                    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
                      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Neuro</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
            </table>
          </td>
          <td width="20%">
            <tr>
              <td className="pl10"><input type="text" class="form-control" id="username" value={username} onChange={handleUChange}/></td>
              <td className="pl10"><input type="password" class="form-control" id="password" value={password} onChange={handlePChange}/></td>
              <td className="pl10"><button type="button" class="btn btn-primary" onClick={handleSubmit}>Login</button></td>
            </tr>
          </td>

        </tr>
        <tr>
          <td style={{verticalAlign: 'top'}}>
            Alztracker is a cross-platform application which streamlines the diagnosis and treatment procedures for Alzheimer's Disease.
          </td>
          <td colSpan="2">
            <img src={doc} />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Home;


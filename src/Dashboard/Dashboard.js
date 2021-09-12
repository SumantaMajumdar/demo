import React from "react";
import {
  Link
} from "react-router-dom";


function Dashboard() {
  return (
    <div>
      <div>
        <div className="logo">Alztracker</div>
        <div className="logout">
          <Link to="/">Logout</Link>
        </div>

      </div>
      <div className="clear">
        <hr className="dahboard-line" />
      </div>
      <div>
        <div className="pat-table-title">Patients</div>
        <div className="pat-search">
          <input placeholder="Id, name, DOB"></input>&nbsp;
          <button>Serach</button>
        </div>
        <table className="pat-table" border="1">
          <tr>
            <th className="pat-table-dt pat-table-heading">Id</th>
            <th className="pat-table-dt pat-table-heading">Name</th>
            <th className="pat-table-dt pat-table-heading">DOB</th>
            <th className="pat-table-dt pat-table-heading">View</th>
          </tr>

          <tr>
            <td className="pat-table-dt">1</td>
            <td className="pat-table-dt">Deepak S</td>
            <td className="pat-table-dt">12/03/2000</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">2</td>
            <td className="pat-table-dt">Gauri M</td>
            <td className="pat-table-dt">10/01/1982</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">3</td>
            <td className="pat-table-dt">Sonali S</td>
            <td className="pat-table-dt">01/01/1982</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">4</td>
            <td className="pat-table-dt">Sourabh K</td>
            <td className="pat-table-dt">03/03/1984</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">5</td>
            <td className="pat-table-dt">Dadaso M</td>
            <td className="pat-table-dt">12/03/1993</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">6</td>
            <td className="pat-table-dt">Shital G</td>
            <td className="pat-table-dt">12/03/1992</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">7</td>
            <td className="pat-table-dt">Ronak M</td>
            <td className="pat-table-dt">12/03/2003</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">8</td>
            <td className="pat-table-dt">Dadu K</td>
            <td className="pat-table-dt">12/03/2003</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">9</td>
            <td className="pat-table-dt">Viru S</td>
            <td className="pat-table-dt">12/03/2006</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">10</td>
            <td className="pat-table-dt">Babaso S</td>
            <td className="pat-table-dt">12/03/2005</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">11</td>
            <td className="pat-table-dt">Kunal B</td>
            <td className="pat-table-dt">12/03/2004</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">12</td>
            <td className="pat-table-dt">Salman K</td>
            <td className="pat-table-dt">12/03/2009</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">13</td>
            <td className="pat-table-dt">Ketan H</td>
            <td className="pat-table-dt">12/03/1988</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">14</td>
            <td className="pat-table-dt">Jiten J</td>
            <td className="pat-table-dt">12/03/1987</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">15</td>
            <td className="pat-table-dt">Tuahs K</td>
            <td className="pat-table-dt">12/03/1985</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
          <tr>
            <td className="pat-table-dt">16</td>
            <td className="pat-table-dt">Sagar M</td>
            <td className="pat-table-dt">12/03/1983</td>
            <td className="pat-table-dt"><Link to="/view-pat">View</Link></td>
          </tr>
        </table>
      </div>
    </div>


  );
}

export default Dashboard;

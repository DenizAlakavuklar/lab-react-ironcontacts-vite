import { useState } from 'react';
import './App.css'
import contacts from './contacts.json'


function App() {
  const [firstFive, setFirstFive] = useState (contacts.slice(0,5));
  console.log(firstFive)
  return <div className='App'>
<h1>Ironcontacts</h1>
<table>
<thead>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
  </tr>
</thead>
<tbody>
<tr>
  <td>
    <img className="photo" src={firstFive[0].pictureUrl} alt="celeb" />
  </td>
  <td> {firstFive[0].name}</td>
  <td> {firstFive[0].popularity}</td>
  </tr>
  <tr>
  <td>
    <img className="photo" src={firstFive[1].pictureUrl} alt="celeb" />
  </td>
  <td> {firstFive[1].name}</td>
  <td> {firstFive[1].popularity}</td>
  </tr>
  <tr>
  <td>
    <img className="photo" src={firstFive[2].pictureUrl} alt="celeb" />
  </td>
  <td> {firstFive[2].name}</td>
  <td> {firstFive[2].popularity}</td>
  </tr>
  <tr>
  <td>
    <img className="photo" src={firstFive[3].pictureUrl} alt="celeb" />
  </td>
  <td> {firstFive[3].name}</td>
  <td> {firstFive[3].popularity}</td>
  </tr>
  <tr>
  <td>
    <img className="photo" src={firstFive[4].pictureUrl} alt="celeb" />
  </td>
  <td> {firstFive[4].name}</td>
  <td> {firstFive[4].popularity}</td>
  </tr>
</tbody>
</table>

  </div>
}
export default App
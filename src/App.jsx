import { useState } from 'react';
import './App.css'
import contacts from './contacts.json'
import icon from './assets/icon.jpg'

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));
  const [afterFive, setAfterFive] = useState(contacts.slice(5));

  console.log(firstFive)
  console.log(afterFive)

  function addRandom() {

    let randomIndex = Math.floor((Math.random() * afterFive.length))
    let randomCeleb = afterFive[randomIndex]

    setFirstFive([...firstFive, randomCeleb])
    const filteredCelebs = afterFive.filter((currentCeleb) => {
      if (currentCeleb.name !== randomCeleb.name) {
        return currentCeleb
      }
    })
    setAfterFive(filteredCelebs)
  }
  return <div className='App'>

    <h1>Ironcontacts</h1>

    <button type="submit" onClick={addRandom} >
      Add
    </button>

    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
        {firstFive.map((celeb) => {
          return (
            <tr>
              <td>
                <img className="photo" src={celeb.pictureUrl} alt="celeb" />
              </td>
              <td> {celeb.name}</td>
              <td> {celeb.popularity}</td>
              {celeb.wonOscar && <td> <img src={icon} alt="icon" className='icon' /></td>}
              {celeb.wonEmmy && <td> <img src={icon} alt="icon" className='icon' /></td>}
            </tr>
          )
        })}
      </tbody>
    </table>

  </div>
}
export default App
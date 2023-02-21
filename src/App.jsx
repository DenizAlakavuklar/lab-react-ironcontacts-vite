import { useState } from 'react';
import './App.css'
import contacts from './contacts.json'
import icon from './assets/icon.jpg'

function sortbyName(array) {
  return (array.sort((name1, name2) => {
    if (name1.name < name2.name) {
      return -1;
    }
    if (name1.name > name2.name) {
      return 1;
    }
    return 0;
  }))
}

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));
  const [afterFive, setAfterFive] = useState(contacts.slice(5));

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

  const sortbyName = () => {
    const sortedFirstFive = [...firstFive].sort((a, b) => a.name.localeCompare(b.name));
   setFirstFive(sortedFirstFive);
  };

  const sortbyPop = () => {
    const sortedFirstFive = [...firstFive].sort((a, b) => b.popularity - a.popularity);
   setFirstFive(sortedFirstFive);
  };

  const deleteContact = (celebId) => {
    const afterDeletedContacts = firstFive.filter(celeb => {
      return celeb.id !== celebId;
    });

    setFirstFive(afterDeletedContacts);
  };

  return <div className='App'>

    <h1>Ironcontacts</h1>

    <button type="submit" onClick={addRandom} >
      Add a Random Celebrity
    </button>

    <button type="submit" onClick={sortbyName} >
      Sort by Name
    </button>

    <button type="submit" onClick={sortbyPop} >
      Sort by Pop
    </button>

     <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {firstFive.map((celeb) => {
          return (
            <tr  key={firstFive.id}>
              <td>
                <img className="photo" src={celeb.pictureUrl} alt="celeb" />
              </td>
              <td> {celeb.name}</td>
              <td> {celeb.popularity}</td>
             <td> {celeb.wonOscar ? <img src={icon} alt="icon" className='icon' /> :null }</td>
             <td> {celeb.wonEmmy ? <img src={icon} alt="icon" className='icon' /> :null }</td>
              <td><button  onClick={() => deleteContact(celeb.id)} >Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>

  </div>
}
export default App
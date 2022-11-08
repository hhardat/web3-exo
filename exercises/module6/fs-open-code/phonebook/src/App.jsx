import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'
import Person from './components/Person/Person'

const App = () => {
  const [persons, setPersons] = useState([]) 
  console.log(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const hook = () => {
    console.log('effect')
    phonebookService
    .getAll()
      .then(initialPhones => {
        setPersons(initialPhones)
      })
  }

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if(persons.filter(person => person.name === newName).length >= 1) {
      if(window.confirm(`${newName} already exists, would you like to replace old number with the new one ?`)) {
          phonebookService.update(persons.filter(person => person.name === newName)[0].id, newPerson)
      }
    } else {
      phonebookService.create(newPerson).then(addedPerson => setPersons(persons.concat(addedPerson))) 
     }  
  }

  const deletePerson = id => {
    const person = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${person.name} ? `)) 
      phonebookService.deletePerson(id).then(deletedPerson => setPersons(persons.filter(p => p.id !== id))) 
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div> name: <input value={newName} onChange={handleNameChange} /></div>
        <div> number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <div>{newName}</div>
      <h2>Numbers</h2>
      <ul>
        { persons.map(person => <Person key={person.id} person={person} deletePerson={() => deletePerson(person.id)} />) }
      </ul>
    </div>
  )
}

export default App  
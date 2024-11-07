import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'


// src/App.jsx

let initialState= [
   {
     _id: 1,
    boxSize: 'Small',
    boxholder: 'Alex',
  }
  
]


const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState)
  
  const addMailbox = (newMailbox) => {
  newMailbox._id = mailboxes.length + 1
  setMailboxes([...mailboxes, newMailbox])
  }



  return (
    <>
    <NavBar />
      <h1>Home</h1>
      <Routes>
        <Route path='/' element={ <main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={ <MailboxList mailboxes={mailboxes}/>} />
        <Route path='/new-mailbox' element={ <MailboxForm addMailbox={addMailbox}/>} />
        <Route path='/mailboxes/:mailboxId' element={ <MailboxDetails mailboxes={mailboxes}/>} />
      </Routes>
    </>
  );
};

export default App;

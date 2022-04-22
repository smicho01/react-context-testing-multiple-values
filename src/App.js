import React, {useContext, useState} from 'react';
import './App.css';

import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import SomeText from './components/SomeText';
import UserBar from './components/UserBar';

export const ApplicationMainContext = React.createContext()

function App() {

  const valueOfCount = 0
  const valueOfCount2 = 0

  const [count, setCount] = useState(valueOfCount)
  const [count2, setCount2] = useState(valueOfCount2)
  const [name, setName] = useState('John Doe')

  const someText = 'This text was set in the App component'

  return (
    <ApplicationMainContext.Provider value={{count, setCount, count2, setCount2, name, setName, someText}}>
      <h1>React - Context Test <small>Use Multiple Values</small> </h1>
      <UserBar />
      <SomeText />

      <div className='stats'>
        <p>Initial value of Count was {valueOfCount}, and now is {count}</p>
        <p>Initial value of Count2 was {valueOfCount2}, and now is {count2}</p>
      </div>

      <ComponentA />
      <ComponentB />
    </ApplicationMainContext.Provider>
  )
  
}

export default App;

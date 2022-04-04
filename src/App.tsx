import { useState } from 'react';
import FormInputs from './form-inputs';
import TableData from './table-data';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Crud operation</h1>
      <FormInputs />
    </div>
  )
}

export default App

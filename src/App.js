import { isCompositeComponent } from 'react-dom/test-utils';
import './App.css';


import React, {useState} from 'react'


function App() {


  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [result, setResult] = useState('')


  const [present, setPresent] = useState(['student4'])
  const [students, setStudents] = useState(['student1', 'student2', 'student3'])


  function presentClick(i)
  {
    present.push(students[i])
    setPresent([...present])
    let newStudents = students.filter((s) => s != students[i])
    setStudents([...newStudents])
  }


  function add()
  {
    const value1 = parseInt(number1)
    const value2 = parseInt(number2)
    setResult(value1 + value2)
  }


  const listButtons = []
  const listPresent = []


  //here
 
  for(let i = 0; i < 3; i++)
  {
    listButtons.push(<p>
        {students[i]}
        <button onClick={() => presentClick(i)}>Present</button>
      </p>)
  }
  for(let i = 0; i < 1; i++)
  {
    listPresent.push(<p>
        {present[i]}
        </p>)
  }
  //here






  return (
    <div className="App">
      <header className="App-header">
        <p>
          CS 625<span className="heart">♥️</span> React
        </p>
        <p className="small">
          {
            students.map((student, index) => [
              <p>
                {student}
                <button onClick={() => presentClick(index)}>Present</button>
              </p>
            ])
          }
        </p>
        <p>
          Present:
          <ul>
          {
            present.map((student, index) => [
              <li>{student}</li>            
            ])
          }
          </ul>
        </p>
      </header>
    </div>
  );
}


export default App;



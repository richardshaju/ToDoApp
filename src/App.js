import React, { useState } from 'react';
import './App.css';

function App() {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let today = new Date()
  let day = days[today.getDay()]
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const [done, setDone] = useState([])
  const date = new Date().toLocaleString()
  return (
    <div className="app">
      <div className="mainHeading">
        <h1 className='name'>ToDo</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} style={{backgroundColor:'#ffff',}} type="text" placeholder=" Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false, date: date }])} className="fas fa-plus"></i>
      </div>
      <div>
        <div className="todos">
          <h3>Active List</h3>
          {toDos.map((value) => {
            return (
              <div className="todo">
                <div className='input-field'>
                  <input value={value.status} onChange={(e) => {
                    setToDos(toDos.filter(obj2 => {
                      if (obj2.id === value.id) {
                        obj2.status = e.target.checked
                        setDone([...done, obj2])
                        obj2 = null;
                      }
                      return obj2
                    }))
                  }} type="checkbox" name="" id="" />
                </div>

                <div className="left">
                  <p>{value.text}</p>
                </div>
                <div className='bottom'>
                  <p style={{ fontSize: '12px' }} >{value.date}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times" style={{color:'#fff'}} onClick={() => setToDos(toDos.filter(obj => {
                    if (obj.id === value.id) {
                      obj = null;
                    }
                    return obj;
                  }))}></i>
                </div>
              </div>
            )
          })
          }
        </div>
        <div className='done-todos'>
          <h3>Tasks Done</h3>
          {done.map((value) => {
            if (value.status) {
              return (<div className="todo">
                <div className="left">
                  <p>{value.text}</p>
                 
                </div>
                <div className='bottom'>
                    <p style={{ fontSize: '12px' }}>{value.date}</p>
                  </div>
              </div>)
            }
            return null;

          })
          }
        </div>
      </div>
    </div >
  );
}

export default App;

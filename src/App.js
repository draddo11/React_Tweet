import React, {useState} from 'react';
import './App.css';
import Tweet from './Tweet'


function App() {

const [users,setUsers] = useState([
  {name: "chris" , message: "i am chris"},
  {name: "Dan" , message: "i an Danny"},
  {name: "John" , message: "my name is John"},
  {name: "Jane" , message: "hi , call me jane"},
]); 
 
  return (
    <div className='app'>
    {users.map(user =>(
      <Tweet name={user.name} message= {user.message}/>
    ))}

 
    </div> 
    
  );
}

export default App;

import React , {useEffect, useState} from 'react'

const UseEffectApi = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUsers(data);
      });
  },[]);
  
  return (
    <div>
      <h1>useEffectApi</h1>
      {users && users.title && <p>{users.title}</p>}
      {users && users.completed && <p>Status: {users.completed ? 'Completed' : 'Pending'}</p>}
    </div>
  )
}

export default UseEffectApi

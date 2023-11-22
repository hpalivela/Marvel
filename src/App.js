// import React, { useState } from "react";
// // import ComponentB from "./ComponentB";
// // import useCounter from "./ComponentB";
// import useFetch from "./ComponentB";
// // import { ComponentC } from './ComponentC'

// // export const userContext=React.createContext({username:'guest',updatedUser:()=>{}});
// // export const userContext=React.createContext();

// const App = () => {
//   // console.log('Rendering')
//   //   const[user,setUser]=useState({username:'john',age:'34'})
//   // const updatedUser=(newName)=>{
//   //     setUser((prevUser)=>({...prevUser,username:newName}))
//   // const [count,setCount]=useState(0);
//   // const [todos,setTodos]=useState([]);
//   // const[todo,setTodo]=useState('')
//   // const addTodos = () => {
//   //     if (todo !== '') {
//   //       setTodos([...todos, todo]);
//   //       setTodo('');
//   //     }
//   //   }

//   // const addHandler=()=>{
//   //   setCount(count+1);
//   // }
//   // const addTodos = useCallback(() => {
//   //   if (todo !== '') {
//   //     setTodos([...todos, todo]);
//   //     setTodo('');
//   //   }
//   // }, [todos, todo]);

//   // const { count, increment, decrement } = useCounter(0);
//   const { data, loading, error } = useFetch('https://api.example.com/data');
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       <h2>Data:</h2>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//     // <div>
//     //   <p>Count: {count}</p>
//     //   <button onClick={increment}>Increment</button>
//     //   <button onClick={decrement}>Decrement</button>
//     // </div>
//     // <div>
//     //   <center>
//     //   {count}
//     //   <button onClick={addHandler}>Increment</button><br/>
//     //   <ComponentB todos={todos}/>
//     //   <input type='text' value={todo} name='todo' onChange={(e)=>setTodo(e.target.value)}/>
//     //   <button onClick={addTodos}>Add todo</button>
//     //   </center>
//     // </div>
//     // <div>
//     //   <userContext.Provider value={'hello from App.js'}>
//     //     <ComponentC  />
//     //   </userContext.Provider>
//     // </div>
//     //example2
//     // <div>
//     //   <userContext.Provider value={'blue'}>
//     //     <ComponentC/>
//     //   </userContext.Provider>
//     // </div>
//     // <div>
//     //   <userContext.Provider value={{...user,updatedUser}}>
//     //     <ComponentC/>
//     //   </userContext.Provider>
//     // </div>
//   );
// };

// export default App;

import React from 'react'
import './App.css';
const App = () => {
  return (
    <div className='App'>
      <h1>Razorpay payment</h1>
      <input type='text'/>
      <br/><br/>
      <button>submit</button>
    </div>
  )
}

export default App


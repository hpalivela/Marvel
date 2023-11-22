// // import React from 'react'

// // const ComponentB =React.memo( ({todos}) => {
// //     console.log('rendering')
// //   return (
// //     <div>
// //        {
// //         todos.map((todo,index)=>{
// //           return(
// //             <div key={index}>
// //               <ul>
// //                 <li>{todo}</li>
// //               </ul>
// //             </div>
// //           )
// //         })
// //       }
// //     </div>
// //   )
// // })

// // export default ComponentB



// // import { useState } from 'react';

// // // Custom hook to manage a counter
// // const useCounter = (initialValue = 0) => {
// //     const [count, setCount] = useState(initialValue);
  
// //     const increment = () => {
// //       setCount(count + 1);
// //     };
  
// //     const decrement = () => {
// //       setCount(count - 1);
// //     };
  
// //     return { count, increment, decrement };
// //   };
// //   export default useCounter;

// import { useState, useEffect } from 'react';
// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };
// export default useFetch;


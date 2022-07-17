import React, { useState, useEffect } from "react";


export default function App() {

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=50")
            .then((response) => response.json())
            .then((data) => setData(data.results))
            .catch((error) => console.log("Error ", error));
    }, []);
    return (
            <div className="wrapper">
                {data.map((user, index) => (
                    <div key={index} className="card">
                        <img src={user.picture.large} alt="" />
                        <div className="name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</div>
                    </div>
                ))}
            </div>
    );
}



// import React from 'react'
// import { useState, useEffect } from 'react'


// const Main = () => {

//     const [data, setData] = useState([])
//     useEffect(() => {
//         fetch("https://randomuser.me/api/?results=30") //fetching data from database
//             .then((res) => {
//                 return res.json()
//             })
//             .then((data) => setData(data.results))
//             .catch((err) => console.log(err))
//     }, []);

//     return (
//         <div className='wrapper'>
//             {data.map((item, index) => {
//                 <div key={index} className='card'>
//                     <img src={item.picture.large} alt="" />
//                     <div className='name'>{`${item.name.title}`} </div>
//                 </div>
//             })}
//         </div>
//     )
// }

// export default Main
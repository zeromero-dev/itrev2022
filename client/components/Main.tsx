import React, { useState, useEffect } from "react";


export default function App() {

    const [data, setData] = useState<any[]>([]);
    //Fetches data on a load
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

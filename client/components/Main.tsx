import React, { useState, useEffect } from "react";


export default function App() {

    const [data, setData] = useState<any[]>([]);
    //Fetches data on a load
    useEffect(() => {
        fetch("http://localhost:8000/user/view_all")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log("Error ", error));
    }, []);
    return (
        <div className="wrapper">
            {data.map((user, index) => (
                <div key={index} className="card">
                    {/* <img src={user.picture.large} alt="" /> */}
                    <div className="name">{`Username:${user.name} Description${user.description} Age:${user.age}`}</div>
                </div>
            ))}
        </div>
    );
}

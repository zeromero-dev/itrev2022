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
                <div key={index} className="card cursor-pointer">
                    {/* <img src={user.picture.large} alt="" /> */}
                    <button type="submit" placeholder="delete" className="border rounded-md bg-primary">Delete</button>
                    <div className="name">
                        <p>
                            Username: {user.name}
                        </p>
                        <p>
                            Description: {user.description}
                        </p>
                        <p>
                            Age: {user.age}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
// {`Username:${user.name} Description${user.description} Age:${user.age}`}
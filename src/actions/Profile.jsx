import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {

    const user = useSelector((state) => state)
    const userArray = Object.keys(user).map((key) => user[key]);

    // console.log(user);
    // console.log(userArray);


    return (
        <>


            {userArray.map((number) => (
                console.log(number)
                                   
                    // <div key={number}>{number.name}</div>
            ))}
        </>
    )
}

export default Profile
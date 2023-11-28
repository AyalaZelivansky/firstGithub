import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
    const [name, setNmae] = useState("")
    const [teacher, setTeacher] = useState("")
    const dispatch = useDispatch();
    const student = { name, teacher };
    const studentUser = () => {
        // const userData = {
        //     name,
        //     teacher
        // }
        dispatch({ type: "createUser", payload: student });
    }

    return (
        <>
            <input onChange={(e) => setNmae(e.target.value)} />
            <input onChange={(e) => setTeacher(e.target.value)} />
            <button onClick={() => studentUser()}>login</button>
        </>
    )
}

export default Login
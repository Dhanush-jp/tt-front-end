import axios from "axios";
import { useState } from "react";

function Reg() {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const changeName = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = async () => {
        try {

            const API_URL =
                process.env.NODE_ENV === "development"
                    ? "http://localhost:8080"
                    : "https://cabsystems-1.onrender.com";

            const res = await axios.post(`${API_URL}/register`, data);

            alert(res.data);

        } catch (xyz) {
            alert(xyz.response?.data || "Error");
        }
    };

    return (
        <>
            <h1>I am App</h1>

            <input onChange={changeName} name="username" placeholder="Enter Username" />
            <input onChange={changeName} name="email" placeholder="Enter Email" />
            <input onChange={changeName} name="password" placeholder="Enter Password" />

            <button onClick={submit}>Submit</button>
        </>
    );
}

export default Reg;
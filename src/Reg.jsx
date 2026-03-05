import { useState } from "react";
import api from "./config/axios";

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
            let res;
            const registerPaths = ["/register", "/api/register"];

            for (const path of registerPaths) {
                try {
                    res = await api.post(path, data);
                    break;
                } catch (err) {
                    if (err?.response?.status !== 404) {
                        throw err;
                    }
                }
            }

            if (!res) {
                throw new Error("Registration endpoint not found on backend");
            }

            alert(res.data);

        } catch (xyz) {
            alert(xyz.response?.data || xyz.message || "Error");
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

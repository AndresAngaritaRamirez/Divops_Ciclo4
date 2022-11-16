import { useRef, useState} from "react";
import { users } from "../Data/Users";
import { Route, Routes } from "react-router-dom";
import {Cliente} from "./Cliente";
import { Admin } from "./Admin";
import { Fragment } from "react";
import Button from "react-bootstrap/esm/Button";

export const Login = () => {

    const inputRef = useRef(null);
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");

    const handleClick = () => {
        setEmail(inputRef.current.value);
        return validarUsuario(inputRef.current.value);
    }

    const validarUsuario = (nombreUsuario) => {
        const usuario = users.find(user => user.email === nombreUsuario)

        if (usuario) {
            console.log("Usuario encontrado");
            if (usuario.esAdmin) {
                return true
            }else{
                return false
            }
        } else {
            console.log("Usuario no encontrado");
            return <Login />
        } 
    }

    return (
        <div className="container border">
            <div className="form-group mx-sm-3 mb-2">
                <input ref={inputRef} type="text" id="email" name="email" className="form-control" placeholder="Email"/>
            </div >
            <div className="form-group mx-sm-3 mb-2">
                <input  type="password" id="password" name="password" className="form-control" placeholder="Password"/>
            </div >
        <center><Button  onClick={handleClick} href={validarUsuario(email) ? "/Admin" : "/Cliente"}
            className="btn btn-primary mb-2">Ingresar</Button></center>
        </div>
    )
};
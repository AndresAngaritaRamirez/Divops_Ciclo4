import { useRef, useState} from "react";
import { users } from "../Data/Users";
import { Route, Routes } from "react-router-dom";
import {Cliente} from "./Cliente";
import { Admin } from "./Admin";
import { Fragment } from "react";

export const Login = () => {

    const inputRef = useRef(null);
    const [nombre, setNombre] = useState("");

    const handleClick = () => {
        setNombre(inputRef.current.value);
        return validarUsuario(inputRef.current.value);
    }

    const validarUsuario = (nombreUsuario) => {
        const usuario = users.find(user => user.name === nombreUsuario)

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
                <input ref={inputRef} type="text" id="message" name="message" className="form-control" placeholder="Nombre"/>
            </div >
        <center><button onClick={handleClick} href={validarUsuario(nombre) ? "/Admin" : "/Cliente"}
            className="btn btn-primary mb-2">Nombre</button></center>
        </div>
    )
};
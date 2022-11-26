import { useRef, useState} from "react";
import {useForm} from "react-hook-form";
import { users } from "../Data/Users";
import { Route, Routes } from "react-router-dom";
import {Cliente} from "./Cliente";
import { Admin } from "./Admin";
import { Fragment } from "react";
import Button from "react-bootstrap/esm/Button";

export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const validacion = null;

    const onSubmit = (evento) => {
        console.log(evento);
        console.log(validarUsuario(evento))
    }

    const validarUsuario = (evento) => {
            const user = users.find(user => user.email === evento.email && user.password === evento.password);
            if (user){
                if (user.esAdmin === true) {
                    window.location.href = "/Admin";
                } else {
                    window.location.href = "/Cliente";
                }
            } else {
                alert("El usuario no existe");
            }
        }

    return (
        <div className="container border">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mx-sm-3 mb-2">
                <input type="text" autoComplete="off" name="email" className="form-control" placeholder="ejemplo@gmail.com"
                    {...register("email", {
                    required: {
                        value: true,
                        message: "Necesitas este campo"
                    },
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "El formato no es correcto"
                    }
                    })}
                />
                </div >
                <div className="form-group mx-sm-3 mb-2">
                <input type="password" name="password" className="form-control" placeholder="Contraseña"
                    {...register("password", {
                    required: {
                        value: true,
                        message: "El campo es requerido"
                    },
                    minLength: {
                        value: 6,
                        message: "La contraseña debe tener al menos 6 caracteres"
                    }
                    })}

                />
                </div >
                    <center><Button type="submit" className="btn btn-primary mb-2">Enviar</Button></center>
            </form>
        </div>
    )
};
import { useState } from "react"

import React from 'react'

const AddData = () => {

    const [nombre, setNombre] = useState('nombre de ejemplo');
    const [apellido, setApellido] = useState('sd');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const crearUsuario = (event) =>  {
        event.preventDefault();
        console.log(event.target.value);
    }

  return (
    <>
        <form  onSubmit={ crearUsuario } > 
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                <input onChange={ (event) => setNombre(event.target.value) } type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Apellido</label>
                <input onChange={ (event) => setApellido(event.target.value) } type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input onChange={ (event) => setEmail(event.target.value) } type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onChange={ (event) => setPassword(event.target.value) } type="password" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input onChange={ (event) => setConfirmPassword(event.target.value) } type="password" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    <div>
        <p>Nombre: { nombre } </p>
        <p>Apellido: { apellido } </p>
        <p>Email: { email } </p>
        <p>Password: { password } </p>
        <p>Confirm Password: { confirmPassword } </p>

    </div>

    </>
  )
}

export default AddData

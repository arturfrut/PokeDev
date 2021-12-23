import React from 'react';
import { Formik, Form, Field } from "formik";  //validar formulario
import axios from "axios";

//Schema
import Schema from '../../form/addUser/form_validation/schema_validation/editUser_schema';
//error
import errorHandle from '../../form/addUser/form_validation/error_validation/addUser_errors';
//style
export const EditUserFromix = ({ user, setEditarUsuario}) => {

    let initialValue = { name:"",email: "", pass: "" };
    const fnValidationForm = (v) => {

        let body={...v,email:user.email}
       /*  alert(JSON.stringify(body)); */
       localStorage.setItem('user', v.name);
        axios.put('http://localhost:4000/user/cambiar/', body)
            .then(function (response) {
            })
            .catch(function (error) {
            });
        setEditarUsuario(false)
    }

    return (
        <div className='EditUserFromixScreen'>
            <Formik
                initialValues={initialValue}
                validationSchema={Schema}
                onSubmit={fnValidationForm}>
                {({ errors }) => {
                    return (
                        <Form className='flex-column '>
                            <h3>EDIT USER</h3>
                            <br />
                            <br />
                            <Field className="input width-100" name="name" placeholder="Name" />
                            {errorHandle(errors).name()}
                            <Field className="input width-100" type="password" name="pass" placeholder="Password" />
                            {errorHandle(errors).pass()}
                            <br />
                            <button className='btn btn-form' type="submit">Confirm</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default EditUserFromix;
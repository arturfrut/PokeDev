import React from 'react';
import { Formik, Form, Field } from "formik";  //validar formulario

//Schema
import Schema from '../../form/addUser/form_validation/schema_validation/addUser_schema';
//error
import errorHandle from '../../form/addUser/form_validation/error_validation/addUser_errors';
//style
export const EditUserFromix = ({ setUserAll, userAll ,setEditarUsuario}) => {

    let initialValue = { name:"",email: "", pass: "" };
    const fnValidationForm = (v) => {
        alert(JSON.stringify(v))
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
                            <Field className="input" name="name" placeholder="Name" />
                            {errorHandle(errors).name()}
                            <Field className="input" name="email" placeholder="E-mail" />
                            {errorHandle(errors).email()}
                            <Field className="input" name="pass" placeholder="Password" />
                            {errorHandle(errors).pass()}
                            <br/>
                            <button className='btn btn-form' type="submit">Create New User</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default EditUserFromix;
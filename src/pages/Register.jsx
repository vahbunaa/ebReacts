import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context';
import { useHistory } from 'react-router';
import './Register.css'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First name Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last name Required'),
  email: Yup.string().email('Invalid email').required('Email Required'),
  phoneNumber: Yup.string().matches(phoneRegExp,'Phone number is not valid.').required('Number Required'),
  password:Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required('No password provided.') 
});



// const state = useAuthContext();
// console.log(state);

export const Register = () => {
  const {addUser} = useAuthContext();
  // console.log(addUser,"aaaaa");
const history = useHistory();
// console.log(history);

  return (

  <div className="login-box">
      

    <h1>Register</h1>
    <div >

    <Formik
      initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber:'',
          password:''
        }}
        //!BUG Here
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          const id = Math.random() * 10;
          const userToAdd={
            id,
            ...values
          }
          // console.log(id);
          // console.log(values);
          // console.log(userToAdd);
          addUser(userToAdd);
          history.push('/');
        }}
        >
      {({ errors, touched }) => (
        <Form className="register-form">
        
        
        <span>First Name 
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
            ) : null}
        </span>
        <span>Last Name
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
            ) : null}
        </span>
        <span>E-mail
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
        </span>
        <span>Number
          <Field name="phoneNumber" type="phoneNumber" />
          {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
        </span>
        <span>Password
          <Field name="password" type="password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
        </span>
        
        <button type="submit">Submit</button>
        
        <span></span>
        <span></span>
        <Link to='/'>Old User? Login</Link>
        </Form>
      )}
    </Formik>
      
      </div>
  </div>
  
);
}

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useAuthContext } from '../context';



const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Required'),
  password:Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required('No password provided.') 
});





export const Login = () => {
  
  const {getUser} = useAuthContext();
  const users = getUser();
  console.log(users);
  const history = useHistory();
  return (
  <div className="login-box">
      <div>

    <h1>Login</h1>
    <Formik 
      initialValues={{
        email: '',
        password:''
      }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        if(users.length > 0){
          const checkIfUserExist = users.filter((user)=>{
            return user.email === values.email && user.password === values.password;
          })
          if(checkIfUserExist.length===1){
            history.push('/dashboard')
          } 
        }
        
        }}
        >
      {({ errors, touched }) => (
          <Form className="register-form">
        <div>

        <span>E-mail 
          <Field name="email" />
          {errors.email && touched.email ? (
              <div>{errors.email}</div>
              ) : null}
        </span>
        <span>Password
          <Field name="password" type="password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
        </span>
        
        <button type="submit">Login</button>
        
        </div>
        <Link to='/register'>New User? Register</Link>
        </Form>
      )}
    </Formik>
      </div>
  </div>
  
);}


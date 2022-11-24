



import './Login.css'

import Input from './input';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().required("Enter your Name"),
    phoneNumber: yup.string().required("Enter your Mobile Number"),
    email: yup.string().min(6, "Enter a valid email"),
    password: yup.string().min(6, "Password must be 6 characters"),
    conformPassword: yup.string().oneOf([yup.ref("password")],"Password must be match"),
})


function Login() {

  const { handleSubmit, register, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  

    return (
        <div className="login-form-wraper">
            <div className='loin-form-container'>
                    <form onSubmit={handleSubmit()}>
                          <h3 class="card-title">Login to your account</h3>
                          <div className="mb-3">
                            <Input
                                id = "email"
                                label="Email"
                                type="email"
                                placeholder = "Enter Email"
                                register = {{...register("email")}}
                                errorMessage = { errors.email?.message}
                            />
                          </div>
                          <div className="mb-3">
                            <Input
                                id = "password"
                                label="Password"
                                type="password"
                                placeholder = "Enter Password"
                                register = {{...register("password")}}
                                errorMessage = { errors.password?.message}
                            />
                          </div>
                          
                          <button className="btn-2 btn-dark" type="submit">Log in</button>
                          <p class="h6 reset">Forgot your password?<a href='#'> Reset it here.</a></p>
                          <p class="h6">Are you new?<a href='#'> Sign up.</a></p>
                    </form>
            </div>
        </div>
    );
}

export default Login;










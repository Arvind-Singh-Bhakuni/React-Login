




import './Sign-up.css';

import Input from './input';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().required("Enter your Name"),
    phoneNumber: yup.string().required("Enter your Mobile Number"),
    email: yup.string().min(6, "Password must be at least 6 characters"),
    password: yup.string().min(6, "Password must be 6 characters"),
    conformPassword: yup.string().oneOf([yup.ref("password")],"Password must be match"),
})

function SignUpOt() {
    
    const { handleSubmit, register, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
      });

    const clickHandler = () =>{
        alert("Radio button has clicked")
    }
    

    return (
        <div className="signup-form-section">
            <div className='signup-form-container'>
                
                    <form onSubmit={handleSubmit()}>
                        <h3 className="card-title">Start submitting bugs</h3>
                        <p className="h6 reset">Enter your details blow to create an account.</p>
                        <p className="h6 reset">This Sign-up page form for User 2.</p>
                        
                        <div className="mb-3">
                            
                            <Input
                                id = "username"
                                label="Username"
                                type="text"
                                placeholder = "Enter Username"
                                register = {{...register("username")}}
                                errorMessage = { errors.username?.message}
                            />

                        </div>
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
                        <div className="mb-3">
                        
                            <Input
                                id = "conformPassword"
                                label="Conform Password"
                                type="password"
                                placeholder = "Conform Password"
                                register = {{...register("conformPassword")}}
                                errorMessage = { errors.conformPassword?.message}
                            />
                          
                        </div>
                        
                        <button className="btn-2 btn-dark" type="submit">Sign-up</button>
                        <p className="h6 already">Already have an account?<a href='#'> Sign up.</a></p>
                    </form>
            </div>
        </div>
    );
}

export default SignUpOt;
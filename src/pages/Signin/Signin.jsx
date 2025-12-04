import { use } from 'react';
import Lottie from 'lottie-react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import loginLottie from '../../assets/lotties/Login.json'
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signin = () => {
    const { loginUser } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const target = e.target;

        const email = target.email.value;
        const password = target.password.value;

        // const user = { name, email, password }

        loginUser(email, password)
            .then(result => {
                console.log("Create User Result : ", result);
                navigate(from);

            })
            .catch(error => {
                console.log("Create User Error : ", error);
            })

        console.log("Handle Login : ", email, password);
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        {/* <p className="py-6"> */}
                        <Lottie style={{ height: '500px' }} animationData={loginLottie}  ></Lottie>
                        {/* </p> */}
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <form onSubmit={handleLogin} className="fieldset">

                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div className=' flex justify-between '>
                                    <a className="link link-hover">Forgot password?</a>
                                    <a className=" italic ">New user ? go <Link className=' font-bold text-primary' to={'/register'}>Register</Link>  </a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                            <SocialLogin from={from}></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
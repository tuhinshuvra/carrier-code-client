import { use } from 'react';
import Lottie from 'lottie-react';
import registerLottie from '../../assets/lotties/register.json'
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Register = () => {
    const { createUser } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const target = e.target;

        // const name = target.name.value;
        const email = target.email.value;
        const password = target.password.value;

        // const user = { name, email, password }

        createUser(email, password)
            .then(result => {
                console.log("Create User Result : ", result);
            })
            .catch(error => {
                console.log("Create User Error : ", error);
            })

        // console.log("Handle Register : ", user);
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        {/* <p className="py-6"> */}
                        <Lottie style={{ height: '500px' }} animationData={registerLottie}  ></Lottie>
                        {/* </p> */}
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <form onSubmit={handleRegister} className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" />

                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
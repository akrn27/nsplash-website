import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState();
    const navigate = useNavigate();

    const Register = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/users`, {
                 name: name,
                 email: email,
                 password: password,
                 confPassword: confPassword
            })
            navigate("/login")
        }catch(error) {
            if(error.response){
                console.log(error.response.data.msg)
                setMsg(error.response.data.msg)
            }
        }
    }

  return (
    <div className="h-screen w-full flex justify-center items-center font-poppins">
        <div className="shadow-2xl p-6">
          <h1 className="font-semibold text-3xl mb-4 text-center">USER REGISTER</h1>
          <form onSubmit={Register}>
            <div>
              <input className="bg-light-gray rounded-xl px-2 py-1 shadow-md mb-3 w-full" type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <input className="bg-light-gray rounded-xl px-2 py-1 shadow-md mb-3 w-full" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <input className="bg-light-gray rounded-xl px-2 py-1 shadow-md mb-5 w-full" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <input className="bg-light-gray rounded-xl px-2 py-1 shadow-md mb-5 w-full" type="password" placeholder="Confirm Password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
            </div>
            <button className="bg-black text-white w-full rounded-xl px-2 py-1 shadow-md">Register</button>
            <div className='mt-4 text-red text-sm text-center'>{msg}</div>
          </form>
        </div>
      </div>
  )
}

export default RegisterPage
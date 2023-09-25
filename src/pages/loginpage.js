import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center font-poppins">
        <div></div>
        <div>
          <h1 className="font-semibold text-3xl mb-4">USER LOGIN</h1>
          <form onSubmit=''>
            <div>
              <input className="bg-light-gray rounded-xl px-2 py-1 shadow-md mb-3" type="text" placeholder="Your Name" />
            </div>
            <div>
              <input className="bg-light-gray rounded-xl px-2 py-1 shadow-md mb-5" type="text" placeholder="Your Password" />
            </div>
            <div>
                <p className="text-gray text-xs mb-6 text-right">Forgot Password?</p>
            </div>
            <button className="bg-black text-white w-full rounded-xl px-2 py-1 shadow-md" type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

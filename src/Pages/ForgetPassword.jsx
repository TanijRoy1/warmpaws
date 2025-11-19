import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const ForgetPassword = () => {
    const {email, setEmail, resetPassWord} = useContext(AuthContext);

    useEffect(() => {
      AOS.init({
        duration: 800,
        offset: 100,
        easing: "ease-in-out",
        once: false, 
        mirror: true,
      });
  }, []);
    
    const handleResetPassword = () => {
        resetPassWord(email)
         .then(() => {
            toast.success("Password reset email sent! Redirecting to Gmail...");
            window.location.href = "https://mail.google.com";
         })
         .catch(e => {
            console.log(e);
         })
    }
  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-[#F1FAFF] via-[#C7E8CA] to-[#76C893] flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full">
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-once="false"
          className={`max-w-md mx-auto mt-10`}>
          <form className=" bg-[#F8F9FA] p-5 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold text-[#184E77] mb-4">
              Reset Your Password
            </h3>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your Email"
                className="input input-bordered w-full bg-white"
                required
              />
              
              <button
                type="button"
                onClick={handleResetPassword}
                className="mt-3 bg-[#E38B29] hover:bg-[#dd7a11] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;

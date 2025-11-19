import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  const { user, setUser, loading, updateUser } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const url = e.target.photoUrl.value;

    updateUser({ displayName: name, photoURL: url })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: url });
        toast.success("Changes saved successfully.");
        setShowForm(false);
        e.target.reset();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (loading) {
    return (
      <h1 className="text-center py-10">
        <span className="loading loading-bars loading-xl"></span>
      </h1>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F1FAFF] via-[#C7E8CA] to-[#76C893] flex flex-col items-center justify-center px-4 sm:py-16 py-25">
      <div className="w-full">
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-once="false"
          className="bg-white/70 backdrop-blur-md shadow-xl mx-auto rounded-2xl p-8 max-w-md w-full border border-[#184E77]/20 text-center"
        >
          <div className="animate__animated animate__bounceInDown avatar mb-5">
            <div className="w-32 rounded-full ring ring-[#E38B29] ring-offset-base-100 ring-offset-2 mx-auto">
              <img src={user?.photoURL} alt={user?.displayName} />
            </div>
          </div>

          <h2 className="animate__animated animate__lightSpeedInRight text-2xl font-bold text-[#184E77] mb-2">
            {user?.displayName}
          </h2>
          <p className="animate__animated animate__bounceInLeft text-gray-700 mb-6">
            {user?.email}
          </p>

          <button
            onClick={() => setShowForm(!showForm)}
            className="animate__animated animate__zoomInUp btn bg-[#E38B29] hover:bg-[#c26808] hover:scale-105 transition-all duration-300 text-white border-0 font-semibold px-6"
          >
            {showForm ? "Close Form" : "Update Profile"}
          </button>
        </div>

        <div
          className={`max-w-md mx-auto mt-10 transition-all duration-300 ${
            showForm ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          } `}
        >
          <form
            onSubmit={handleUpdate}
            className=" bg-[#F8F9FA] p-5 rounded-lg shadow-inner"
          >
            <h3 className="text-xl font-semibold text-[#184E77] mb-4">
              Update Your Details
            </h3>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full bg-white"
                required
              />
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                className="input input-bordered w-full bg-white"
                required
              />
              <button
                type="submit"
                className="mt-3 bg-[#E38B29] hover:bg-[#dd7a11] cursor-pointer text-white font-semibold py-2 px-6 rounded-lg transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;

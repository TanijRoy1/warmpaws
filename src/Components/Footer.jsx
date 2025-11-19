import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import MyContainer from "./MyContainer";

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white">
      <MyContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          <div>
            <h2 className="text-2xl font-bold text-[#F7B267] mb-3">
              WarmPaws 🐾
            </h2>
            <p className="text-sm text-gray-300">
              Keeping your furry friends cozy, happy, and healthy this winter.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#E38B29]">
              Contact
            </h3>
            <p className="text-sm text-gray-300">📍 Dhaka, Bangladesh</p>
            <p className="text-sm text-gray-300">📞 +880 1234 567890</p>
            <p className="text-sm text-gray-300">✉️ contact@warmpaws.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#E38B29]">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-[#F7B267]">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-[#F7B267]">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#F7B267]">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm border-t border-gray-700 py-4">
          © {new Date().getFullYear()} WarmPaws. All Rights Reserved. |
          <a href="#" className="text-[#F7B267] hover:underline ml-1">
            Privacy Policy
          </a>
        </div>
      </MyContainer>
    </footer>
  );
};

export default Footer;

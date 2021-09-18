import logo from "./logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";

import JavaIcon from "./assets/icon/java.png";
import JavaScriptIcon from "./assets/icon/javascript.png";
import PythonIcon from "./assets/icon/python.png";
import FastApiIcon from "./assets/icon/fastapi.png";
import DjangoIcon from "./assets/icon/django.png";
import SpringBootIcon from "./assets/icon/springboot.png";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="py-7 px-10 ">
        <div className="flex flex-col w-full my-24 bg-white shadow-xl hover:shadow">
          <img
            className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
            src="https://avatars.githubusercontent.com/u/67946056?v=4"
            alt=""
          />
          <div className="text-center mt-2 text-3xl font-medium">
            Giya Pranata
          </div>
          <div className="text-center mt-2 text-base">@pranatalite12</div>
          {/* <div class="text-center font-normal text-lg">Kerala</div> */}
          <div className="px-6 text-center mt-2 font-bold text-sm">
            <p>Software Engineer</p>
          </div>
          <hr className="mt-8" />
          <h1 className="px-5 pt-5 text-left font-semibold text-lg">
            Social Media
          </h1>
          <div className="p-5 lg:flex lg:flex-row lg:space-x-3">
            <a
              className="phone:my-3 cursor-pointer flex flex-row items-center justify-content"
              onClick={() => {
                window.open("https://mail.google.com/", "_blank");
              }}
            >
              <SocialIcon network="email" style={{ height: 25, width: 25 }} />

              <p className="ml-2 text-md font-semibold">
                pranata.giya12.gp@gmail.com
              </p>
            </a>
            <a
              className="phone:my-3 cursor-pointer flex flex-row items-center justify-content"
              onClick={() => {
                window.open(
                  "https://id.linkedin.com/in/giya-pranata-a73a4593",
                  "_blank"
                );
              }}
            >
              <SocialIcon
                network="linkedin"
                style={{ height: 25, width: 25 }}
              />

              <p className="ml-2 text-md font-semibold">Linkedin</p>
            </a>
            <a
              className="phone:my-3 cursor-pointer flex flex-row items-center justify-content"
              onClick={() => {
                window.open("https://medium.com/@pranata.giya12.gp", "_blank");
              }}
            >
              <SocialIcon network="medium" style={{ height: 25, width: 25 }} />

              <p className="ml-2 text-md font-semibold">Medium</p>
            </a>
            <a
              className="phone:my-3 cursor-pointer flex flex-row items-center justify-content"
              onClick={() => {
                window.open("https://www.instagram.com/giyapranata/", "_blank");
              }}
            >
              <SocialIcon
                network="instagram"
                style={{ height: 25, width: 25 }}
              />
              <p className="ml-2 text-md font-semibold">Instagram</p>
            </a>
          </div>
          <h1 className="px-5 pt-5 text-left font-semibold text-lg">
            Programming Language
          </h1>
          <div className="p-5 lg:flex lg:flex-row lg:space-x-3">
            <a
              className="phone:my-3 cursor-pointer flex flex-row items-center justify-content"
              onClick={() => {
                window.open("https://mail.google.com/", "_blank");
              }}
            >
              <SocialIcon network="email" style={{ height: 25, width: 25 }} />

              <p className="ml-2 text-md font-semibold">
                pranata.giya12.gp@gmail.com
              </p>
            </a>
            <a
              className="phone:my-3 cursor-pointer flex flex-row items-center justify-content"
              onClick={() => {
                window.open(
                  "https://id.linkedin.com/in/giya-pranata-a73a4593",
                  "_blank"
                );
              }}
            >
              <SocialIcon
                network="linkedin"
                style={{ height: 25, width: 25 }}
              />

              <p className="ml-2 text-md font-semibold">Linkedin</p>
            </a>
            <a
              className="phone:my-3 cursor-pointer flex flex-row items-center justify-content"
              onClick={() => {
                window.open("https://medium.com/@pranata.giya12.gp", "_blank");
              }}
            >
              <SocialIcon network="medium" style={{ height: 25, width: 25 }} />

              <p className="ml-2 text-md font-semibold">Medium</p>
            </a>
            <a
              className="phone:my-3 cursor-pointer flex flex-row items-center justify-content"
              onClick={() => {
                window.open("https://www.instagram.com/giyapranata/", "_blank");
              }}
            >
              <SocialIcon
                network="instagram"
                style={{ height: 25, width: 25 }}
              />
              <p className="ml-2 text-md font-semibold">Instagram</p>
            </a>
          </div>
        </div>

        <br className="phone:mt-80" />
        <br className="phone:mt-80" />
      </div>
    </div>
  );
}

export default App;

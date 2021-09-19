import logo from "./logo.svg";
import "./App.css";
import { SocialIcon } from "react-social-icons";

import JavaIcon from "./assets/icon/java.png";
import JavaScriptIcon from "./assets/icon/javascript.png";
import PythonIcon from "./assets/icon/python.png";
import FastApiIcon from "./assets/icon/fastapi.png";
import DjangoIcon from "./assets/icon/django.png";
import SpringBootIcon from "./assets/icon/springboot.png";

import ReactIcon from "./assets/icon/react.png";
import NodeIcon from "./assets/icon/nodejs.png";

import PostgresqlIcon from "./assets/icon/postgresql.png";
import MysqlIcon from "./assets/icon/MySQL.png";
import MongoDBIcon from "./assets/icon/mong.png";
import RedisIcon from "./assets/icon/redis.png";

import ElasticIcon from "./assets/icon/elastic.png";
import LogstashIcon from "./assets/icon/logstah.png";
import KafkaIcon from "./assets/icon/kafka.png";
import KibanaIcon from "./assets/icon/kibana.png";

import TailIcon from "./assets/icon/tailwind.png";
import DockerIcon from "./assets/icon/docker.png";
import GitlabIcon from "./assets/icon/gitlab.png";
import JenkinsIcon from "./assets/icon/jenkins.png";

import NextIcon from "./assets/icon/next.png";
import Asyst from "./assets/icon/asyst.png";
import Gbook from "./assets/icon/gbook.png";

import lemoncode21 from "./assets/icon/lemoncode21.png";

function App() {
  const renderProgrammingLanguage = [
    {
      id: 1,
      name: "Java",
      Icon: JavaIcon,
    },
    {
      id: 2,
      name: "Javascript",
      Icon: JavaScriptIcon,
    },
    {
      id: 3,
      name: "Python",
      Icon: PythonIcon,
    },
  ];

  const renderTechKnowledge = [
    {
      id: 1,
      name: "Postgresql",
      Icon: PostgresqlIcon,
    },
    {
      id: 2,
      name: "Mysql",
      Icon: MysqlIcon,
    },
    {
      id: 3,
      name: "Mongodb",
      Icon: MongoDBIcon,
    },
    {
      id: 4,
      name: "Elastic",
      Icon: ElasticIcon,
    },
    {
      id: 5,
      name: "Logstash",
      Icon: LogstashIcon,
    },
    {
      id: 6,
      name: "Kibana",
      Icon: KibanaIcon,
    },
    {
      id: 7,
      name: "Kafka",
      Icon: KafkaIcon,
    },
    {
      id: 8,
      name: "Redis",
      Icon: RedisIcon,
    },
    {
      id: 9,
      name: "Spring",
      Icon: SpringBootIcon,
    },
    {
      id: 10,
      name: "React Js & Native",
      Icon: ReactIcon,
    },
    {
      id: 11,
      name: "FastApi",
      Icon: FastApiIcon,
    },
    {
      id: 12,
      name: "Node Js",
      Icon: NodeIcon,
    },
    {
      id: 13,
      name: "Docker",
      Icon: DockerIcon,
    },
    {
      id: 14,
      name: "Gitlab-CI",
      Icon: GitlabIcon,
    },
    {
      id: 15,
      name: "Jenkins",
      Icon: JenkinsIcon,
    },
    {
      id: 16,
      name: "Next Js",
      Icon: NextIcon,
    },
    {
      id: 17,
      name: "Tailwind CSS",
      Icon: TailIcon,
    },
  ];

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
          <div className="p-5 grid mb-5 grid-rows-1 gap-1 lg:grid-cols-10 xl:grid-cols-10">
            {renderProgrammingLanguage.map((d, i) => {
              return (
                <div
                  className="phone:my-3 cursor-default flex flex-row items-center justify-content"
                  key={i}
                >
                  <img
                    src={d.Icon}
                    alt="Placeholder"
                    className="rounded-full object-cover h-8 w-8"
                  />
                  <p className="ml-2 text-md font-semibold">{d.name}</p>
                </div>
              );
            })}
          </div>
          <h1 className="px-5 pt-5 text-left font-semibold text-lg">
            Technology Knowledge
          </h1>
          <div className="p-5 grid mb-5 grid-rows-2 gap-1 lg:grid-cols-8 xl:grid-cols-8">
            {renderTechKnowledge.map((d, i) => {
              return (
                <div
                  className="phone:my-3 cursor-default flex flex-row items-center justify-content"
                  key={i}
                >
                  <img
                    src={d.Icon}
                    alt="Placeholder"
                    className="rounded-full object-cover h-8 w-8"
                  />
                  <p className="ml-2 text-md font-semibold">{d.name}</p>
                </div>
              );
            })}
          </div>
          <h1 className="px-5 pt-5 text-left font-semibold text-lg">Project</h1>
          <div className="p-5 grid mb-5 grid-rows-2 gap-7 lg:grid-cols-3 xl:grid-cols-3">
            <a class="bg-gray-50 border-yellow-300 dark:bg-gray-300 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500"
               onClick={() => {
                window.open("https://www.asyst.co.id/our-products/category/chronus", "_blank");
              }}
            >
              <img
                class="w-16 h-16 object-cover rounded-full"
                src={Asyst}
                alt=""
              />
              <div class="ml-3 flex flex-col justify-center">
                <p class="text-gray-900 dark:text-gray-300 text-sm">
                  Fleet Operational System and Maintenance
                </p>
                <p class="text-black dark:text-gray-100 text-justify font-bold text-sm">
                  PT Aero Systems Indonesia
                </p>
                <p class="text-black dark:text-gray-100 text-justify text-xs ">
                  Company Project
                </p>
              </div>
            </a>
            <a class="bg-gray-50 border-blue-300 dark:bg-gray-300 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-blue-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500"
               onClick={() => {
                window.open("https://www.asyst.co.id/our-products/category/athena", "_blank");
              }}
            >
              <img
                class="w-16 h-16 object-cover rounded-full"
                src={Asyst}
                alt=""
              />
              <div class="ml-3 flex flex-col justify-center">
                <p class="text-gray-900 dark:text-gray-300 text-sm">
                  Corporate Travel Management Solution
                </p>
                <p class="text-black dark:text-gray-100 text-justify font-bold text-sm">
                  PT Aero Systems Indonesia
                </p>
                <p class="text-black dark:text-gray-100 text-justify text-xs ">
                  Company Project
                </p>
              </div>
            </a>
            <a class="group bg-gray-50 border-black dark:bg-gray-300 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-gray-700 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500"
               onClick={() => {
                window.open("https://play.google.com/store/apps/details?id=com.gbook.app", "_blank");
              }}
            >
              <img
                class="w-16 h-16 object-cover rounded-full"
                src={Gbook}
                alt=""
              />
              <div class="ml-3 flex flex-col justify-center">
                <p class="text-gray-900 dark:text-gray-300 font-bold text-sm group-hover:text-white">
                  Gbook
                </p>
                <p class="text-black dark:text-gray-100 text-justify text-xs group-hover:text-white">
                  Personal Project
                </p>
              </div>
            </a>
            <a class="group bg-gray-50 border-yellow-300 dark:bg-gray-300 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-200 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500"
               onClick={() => {
                window.open("https://lemoncode21.com/", "_blank");
              }}
            >
              <img
                class="w-16 h-16 object-cover rounded-full"
                src={lemoncode21}
                alt=""
              />
              <div class="ml-3 flex flex-col justify-center">
                <p class="text-gray-900 dark:text-gray-300 font-bold text-sm">
                  Lemon Code 21
                </p>
                <p class="text-black dark:text-gray-100 text-justify text-xs">
                  Personal Project
                </p>
              </div>
            </a>
          </div>
        </div>

        <br className="phone:mt-80" />
        {/* <br className="phone:mt-80" /> */}
      </div>
    </div>
  );
}

export default App;

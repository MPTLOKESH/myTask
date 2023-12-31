import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaFan } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

import Img from "../../assets/reactLogo/displayImg.webp";

const data = [
  {
    id: 1,
    date: "2023-01-15",
    img: Img,
    link: "https://example.com/link1",
    task_no: "Day 01",
  },
  {
    id: 2,
    date: "2023-02-20",
    img: Img,
    link: "https://example.com/link2",
    task_no: "Day 02",
  },
  {
    id: 3,
    date: "2023-03-10",
    img: Img,
    link: "https://example.com/link3",
    task_no: "Day 03",
  },
  {
    id: 4,
    date: "2023-04-05",
    img: Img,
    link: "https://example.com/link4",
    task_no: "Day 04",
  },
  {
    id: 5,
    date: "2023-05-12",
    img: Img,
    link: "https://example.com/link5",
    task_no: "Day 05",
  },
  {
    id: 6,
    date: "2023-06-22",
    img: Img,
    link: "https://example.com/link6",
    task_no: "Day 06",
  },
  {
    id: 7,
    date: "2023-07-14",
    img: Img,
    link: "https://example.com/link7",
    task_no: "Day 07",
  },
  {
    id: 8,
    date: "2023-08-30",
    img: Img,
    link: "https://example.com/link8",
    task_no: "Day 08",
  },
  {
    id: 9,
    date: "2023-09-18",
    img: Img,
    link: "https://example.com/link9",
    task_no: "Day 09",
  },
  {
    id: 10,
    date: "2023-10-02",
    img: Img,
    link: "https://example.com/link10",
    task_no: "Day 10",
  },
  {
    id: 11,
    date: "2023-11-11",
    img: Img,
    link: "https://example.com/link11",
    task_no: "Day 11",
  },
  {
    id: 12,
    date: "2023-12-20",
    img: Img,
    link: "https://example.com/link12",
    task_no: "Day 12",
  },
  {
    id: 13,
    date: "2024-01-08",
    img: Img,
    link: "https://example.com/link13",
    task_no: "Day 13",
  },
];

const Dashboard = () => {
  return (
    <div>
      <div className="container flex flex-col px-5 py-10 font-bold">
        {/* Dashboard */}
        <div className="flex items-center justify-between mb-3 ">
          <div data-aos="fade-right" className="text-2xl flex ">
            <h1 className="mr-2">Dashboard</h1>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary "></span>
            </span>
          </div>
          {/* Dashboard icon */}
          <div data-aos="fade-left" className="text-2xl">
            <RxDashboard className="hover:scale-125 cursor-pointer" />
          </div>
        </div>
        {/* Grid */}
        <hr data-aos="fade-down"></hr>
        <div>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center my-10"
          >
            {data.map((task) => (
              <div
                key={task.id}
                className="p-4 flex flex-col h-[320px] w-[300px] bg-white hover:bg-gray-100 rounded-[20px] hover:scale-95 drop-shadow-md"
              >
                <div>
                  <img
                    src={task.img}
                    className="rounded-[20px] h-[200px] w-[300px] object-cover"
                  />
                </div>
                <div className="flex items-center justify-between  mt-3">
                  <p>{task.task_no}</p>
                  <p>{task.date}</p>
                  <FaReact className="animate-spin animate-duration-slow infinite" />
                </div>
                <div className="flex justify-center">
                  <button className="bg-primary px-2 py-1 my-3 rounded-[10px]">
                    <a href={task.link}>View</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

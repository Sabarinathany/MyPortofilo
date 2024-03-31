import React from "react";
import "../Portfolio/MyProtfolio.css";
import EmojiPicker from "emoji-picker-react";
import rev2 from "../image/rev2.jpg";
import workingboy from "../image/workind-boy.png";
import { IoIosMail } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import { GiRunningShoe } from "react-icons/gi";
import profile1 from "../image/project1.png";
import profile2 from "../image/project2.png";
import Html from "../image/HTML.png";
import css from "../image/css.png";
import js from "../image/js.png";
import react from "../image/react.png";
import bootstrap from "../image/bootstrap.png";
import Nodejs from "../image/Nodejs.png";
import mongodp from "../image/mongodp.png";
import figma from "../image/figma.png";
import sabari from "../image/sabari.jpeg";
import webdevelopment from "../image/web.jpg";
import contact1 from "../image/contact1.png";

const MyProtfolio = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5d27ea35-720a-4999-b94b-af49d880cbd8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="main-div">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav id="nav-bar-all">
              <p id="nav-left-name">Sabari.dev</p>
              <ul id="nav-ul">
                <li id="nav-id">
                  <a href="#" id="nav-a">
                    Home
                  </a>
                </li>
                <li id="nav-id">
                  <a href="#about-img" id="nav-a">
                    About
                  </a>
                </li>
                <li id="nav-id">
                  <a href="#Project" id="nav-a">
                    Projects
                  </a>
                </li>
                <li id="nav-id">
                  <a href="#Contact" id="nav-a">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="body">
              <p id="h2">Front -end react developer👋 </p>
              <p id="para">
                Hi, I'm <span className="my-name">Sabarinathan y</span>, a
                passionate Front-End React Developer. Let's build something
                amazing together!
              </p>
              <div id="all-icons">
                <a
                  id="linkedin-icon"
                  href="https://chat.openai.com/c/7313b218-b0bb-49c6-b110-1762a32fd815"
                >
                  <FaLinkedin />
                </a>
                <a
                  id="git-hub"
                  href="https://chat.openai.com/c/7313b218-b0bb-49c6-b110-1762a32fd815"
                >
                  <FaGithub />
                </a>
              </div>
              <img id="img-profile" src={sabari}></img>
              <div id="border"></div>
              <div id="Tech-stack">
                <p id="tech-stack">
                  Tech Stack <span id="tech-symbol"> |</span>
                </p>
                <ul id="ul">
                  <li id="html">
                    <img src={Html}></img>
                  </li>
                  <li id="css">
                    <img src={css}></img>
                  </li>
                  <li id="js">
                    <img src={js}></img>
                  </li>
                  <li id="react">
                    <img src={react} id="ig"></img>
                  </li>
                  <li id="bootstrap">
                    <img src={bootstrap}></img>
                  </li>
                  <li id="nodejs">
                    <img src={Nodejs}></img>
                  </li>
                  <li id="mangodb">
                    <img src={mongodp}></img>
                  </li>
                  <li id="figma">
                    <img src={figma}></img>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about">
            <p id="About-content">About me</p>
            <text id="text-1">Passionate Front-End React Developer</text>
            <p id="about-p1">
              I'm Sabarinathan, dedicated to crafting seamless user experiences.
              With a keen eye for design and a love for clean, efficient code, I
              specialize in building dynamic and responsive web applications.
            </p>

            <text id="text-2">Creating Intuitive Interfaces</text>
            <p id="about-p2">
              My goal is to create interfaces that meet users' needs and leave a
              lasting impression. Let's collaborate and bring your ideas to life
              with the power of React!{" "}
            </p>
            <div id="circle-2"></div>
            <img src={workingboy} id="working-boy" width={300}></img>
            <div id="circle-3"></div>
            {/* <p id="circle-text" d="M 2">
            
              Full-Stack Web Developer
            </p> */}

            <img src={webdevelopment} id="about-img"></img>
            <p id="para1"></p>
            <p id="para1"></p>
          </div>
          <div id="portfolio">
            <p id="Project">Portfolio</p>
            <p id="Project-h1">Each project is a unique piece of development</p>
            <img src={profile1} id="project1"></img>
            <div id="div-1">
              <p id="project-p1">
                Online Footwear Shopping
                <span id="logo-1">
                  <GiRunningShoe />
                </span>
              </p>
              <p id="Porject-c1">
                Our online shoe store is your destination for stylish footwear.
                Explore our curated selection, compare options, and find the
                perfect pair for any occasion.
              </p>
              <div id="project-react">
                <p>
                  <a href="#" className="a">
                    React
                  </a>
                </p>
                <p>
                  <a href="#" className="a">
                    CSS
                  </a>
                </p>
              </div>
              <div id="project-icon-1">
                <p id="project-icon-git">
                  <a href="#" className="a1">
                    <span className="github-icon">GitHub</span>
                    <FaGithub />
                  </a>
                </p>
                <p id="project-icon-demo">
                  <a href="#" className="a2">
                    <span className="live-demo">Live Demo</span>
                    <RiShareBoxFill />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div id="Car-rent">
            <img src={profile2} id="project-2"></img>
            <p id="car-rental">
              CAR RENTAL{" "}
              <span id="car-icon">
                <FaCar />
              </span>{" "}
            </p>
            <p id="profile-2-para">
              A car rental website is an online platform that allows users to
              rent cars for personal or bussiness use. the website provide an
              interface for searching comparing and reserving cars
            </p>
            <div className="react-name">
              <p id="project-used">
                <a href="#" id="react-2">
                  React
                </a>
              </p>
              <p>
                <a href="#" id="css-2">
                  CSS
                </a>
              </p>
              <p>
                <a href="#" id="bootstap-2">
                  Bootstrap
                </a>
              </p>
            </div>
            <div id="project-2-b">
              <p id="project2-icon-git">
                <a href="#" className="b1">
                  <span className="github-icon2">GitHub</span>
                  <FaGithub />
                </a>
              </p>
              <p id="project2-icon-demo">
                <a href="#" className="b2">
                  <span className="live-demo2">Live Demo</span>
                  <RiShareBoxFill />
                </a>
              </p>
            </div>
          </div>
          <div id="Contact">
            <div>
              {" "}
              <p id="form-head">Contact form</p>
              <form onSubmit={onSubmit} id="form">
                <label id="label-1">Name</label>
                <br></br>
                <input type="text" name="name" required id="input-1" />
                <br></br>
                <label id="label-2">Email Id</label>
                <br></br>
                <input type="email" name="email" required id="input-2" />
                <br></br>

                <textarea
                  id="textarea"
                  name="message"
                  placeholder=" message...."
                  required
                ></textarea>
                <br></br>
                <span id="result">{result}</span>
                <button type="submit" id="button">
                  Submit Form
                </button>
              </form>
              <img src={contact1} id="contact" width={300}></img>
              <p id="mail-full">
                <span id="mail-id">
                  {" "}
                  <IoIosMail />
                </span>
                <a href="#" id="anchoe-tag">
                  {" "}
                  sabarinathany22@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProtfolio;

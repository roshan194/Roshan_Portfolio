import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Amazon_clone.png'
import olximage from '../../Assets/Keeper_app.png'
import netfliximage from '../../Assets/Discord_clone.png'
import gridlinesbuilders from '../../Assets/Drumkit.png'
import charlespizza from '../../Assets/Weather_App.png'
import todolist from '../../Assets/ss1.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="EasyShop"
                description="Developed an Amazon-inspired web app using ReactJS, HTML, CSS, and React Context API. Integrated Firebase for authentication, database, functions, and hosting. Enabled secure user registration, login, and personalized features. Utilized Firebase Realtime Database for seamless product browsing and achieved notable performance improvements."
                ghLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="NoteTrack"
                description="A Simplified Task and Note Management App.With an intuitive user interface, users can easily manage tasks and notes. Stay organized and on top of daily activities with this streamlined and powerful tool. Simplify task and note management with NoteTrack."
                ghLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Chatify"
                description="Chatify, a modern chat app built on ReactJS, Redux, and Firebase, offers a visually appealing and user-friendly interface with HTML and CSS. With Firebase Hosting, it ensures effortless deployment and real-time communication. Stay connected with friends, family, or colleagues hassle-free on Chatify."
                ghLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Drumkit"
                description="Drumkit is an interactive web application that simulates a drum kit, allowing users to play drums using both mouse clicks and keyboard keys. With a fun and intuitive interface, users can unleash their musical creativity and rhythm, making it an enjoyable and engaging drumming experience."
                ghLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="WeatherApp"
                description="WeatherApp is a web application leveraging the OpenWeather MAP API. Powered by a team of data scientists and IT experts, it offers historical, current, and forecasted weather data globally. Users can access real-time weather information with light-speed APIs, making it a reliable source for weather updates."
                ghLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="Blog App"
                description="The Blog Application allows users to create, edit, and delete blogs while also viewing and making changes to other blogs. Utilizing LocalStorage, the app ensures data persistence, allowing users to access their blogs even after closing the browser, ensuring a seamless and convenient blogging experience."
                ghLink=""

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist
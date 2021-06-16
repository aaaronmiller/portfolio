import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Animation from "./Components/Animation";
import dummyText from "./DummyText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Animation />

        <Section
          title="About"
          subtitle={
            <div>
              <p>
                Hello! My name is Aaron Miller, a full stack developer from Seattle, WA. I love to write scalable, maintainable and efficient code. Working with the latest techniques day in day out is my goal. I am a hardworking, deadline oriented team-player.
              </p>

              SKILLS<br></br>
Experienced in Javascript, React, Node.JS, JQuery, HTML5, CSS, SASS, SQL, Sequelize, MongoDB, Mongoose, PHP, Express, Python, Java, Bootstrap, React Native
Fluent with Visual Studio Code, MySQL Workbench, Studio 3T, Postman, Balsamiq, Slack, Heroku, Zoom, Git
Familiar with agile methodologies
Well versed in the production of modern digital applications using React Native
Understands deployment and customization of CMS systems including Wordpress and Drupal
Knowledgeable about SEO optimization and maintenance
Design experience using Adobe Creative Cloud
<br></br>
              <p></p>
EXPERIENCE<br></br>
2FIX.US, Seattle, WA — Lead Front End Developer
June 2014 – PRESENT
Fixed and updated legacy code, migrated projects to CMS based backends
Designed new layouts and templates utilizing Wordpress and React
Reworked existing javascript code where appropriate
Developed and implemented database schema (SQL and MongoDB)
Designed a SEO strategy which was used to update and optimize content
<p></p>
Aaron Miller Computer Solutions, Seattle, WA — Owner/Operator
May 2008 – PRESENT
Built cutting-edge websites for clients using HTML/CSS, Wordpress, React and Angular
Well versed in communicating with customers / stakeholders; turning their needs into solutions in expected timeframes
Conceived overall stylistic decisions to achieve a modern and interactive layout
Led communication with clients in the creation of concept diagrams and design approval
Oversaw subsequent website optimization and maintenance
<p></p>
EDUCATION<br></br><br></br>
University of Washington Coding Bootcamp
May 2019 - August 2019 - Seattle
Immersive course on designing and building web applications, with a specific focus on advanced JavaScript and React.js (graduated top 5% of class)
University of Washington
B.A. Comparative History of Ideas (Thesis : Digital Copyright in the Millennial Age)
              <p>
                When I’m not working, I’m either: Looking for the latest coding techniques, practicing my calligraphy, skiing down the local mountains, traveling, photographing or being a food addict.  I also have a keen interest in computer hardware; fixing laptops and building desktops, messing around with breadboards for Arduino projects, and making drones and other RC creations.
              </p>
              <p>
                <a href="https://www.linkedin.com/in/aaron-miller-7ab7764" style={{ color: "#0e4c9c" }}>LinkedIn</a>
              </p><p>
                <a href="https://github.com/aaaronmiller" style={{ color: "#0e4c9c" }}>GitHub</a>
              </p>
              <div style={{ color: "black" }}>
                

              </div>
              <p>
              </p>
            </div>
          }
          dark={false}
          id="section2"
        />
        <Section
          title="Portfolio"
          subtitle={
            <div class="row">
              <div class="col-lg-12" style={{ textAlign: "center" }}>


                <div class="work">
                  <a href="https://aaaronmiller.github.io/Board-Games-With-Friends/"><img src="https://aaaronmiller.github.io/Bootstrap-Portfolio/assets/images/bgwf.jpg"
                    alt="project 3" style={{ width: "200px" }} /></a>
                  <h3 style={{ padding: "0px" }} >Project 3: Board games with Friends (React)</h3>
                  <h5 style={{ padding: "0px" }}><a href="https://github.com/aaaronmiller/Board-Games-With-Friends">
                    (Git repository)</a></h5>
                </div><br />

                <div class="work">
                  <a href="https://fast-brook-91386.herokuapp.com/"><img src="https://aaaronmiller.github.io/Bootstrap-Portfolio/assets/images/spect.jpg"
                    alt="project 2" style={{ width: "200px" }} /></a>
                  <h3>Project 2: Spectrum Careers</h3>
                  <h5><a href="https://github.com/aaaronmiller/Project-2-Spectrum-Careers">
                    (Git repository)</a></h5>
                </div><br />

                <div class="work">
                  <a href="https://aaaronmiller.github.io/projectnumber1/"><img src="https://aaaronmiller.github.io/Bootstrap-Portfolio/assets/images/project1thumb.jpg"
                    alt="project 1" style={{ width: "200px" }} /></a>
                  <h3>Project 1 : My Dog and Me</h3>
                  <h5><a href="https://github.com/aaaronmiller/projectnumber1">
                    (Git repository)</a></h5>
                </div><br />

                <div class="work">
                  <a href="https://damp-caverns-93347.herokuapp.com/"><img src="https://aaaronmiller.github.io/Bootstrap-Portfolio/assets/images/burger.jpg"
                    alt="burger" style={{ width: "200px" }} /></a>
                  <h3>Eat-Da-Burger</h3>
                  <h5><a href="https://github.com/aaaronmiller/burger">
                    (Git repository)</a></h5>
                </div><br />

                <div class="work">
                  <a href="https://bongobong.herokuapp.com/"><img src="https://aaaronmiller.github.io/Bootstrap-Portfolio/assets/images/friendfinder.jpg"
                    alt="friend finder" style={{ width: "200px" }} /></a>
                  <h3>Friend Finder</h3>
                  <h5><a href="https://github.com/aaaronmiller/friendfinder">
                    (Git repository)</a></h5>
                </div><br />

                <div class="work">
                  <a href="https://aaaronmiller.github.io/Word-Guess-Game/"><img src="https://aaaronmiller.github.io/Bootstrap-Portfolio/assets/images/wordguess.jpg"
                    alt="Wordguess game" style={{ width: "200px" }} /></a>
                  <h3>Wordguess game</h3>
                  <h5><a href="https://github.com/aaaronmiller/Word-Guess-Game">
                    (Git repository)</a></h5>
                </div><br />

                <div class="work">
                  <a href="https://aaaronmiller.github.io/traintime/"><img src="https://aaaronmiller.github.io/Bootstrap-Portfolio/assets/images/train.jpg"
                    alt="Train schedule demo" style={{ width: "200px" }} /></a>
                  <h3>Train schedule demo</h3>
                  <h5><a href="https://github.com/aaaronmiller/traintime">
                    (Git repository)</a></h5>
                </div><br />

                <div class="work">
                  <a href="https://aaaronmiller.github.io/unit-4-game/"><img src="https://aaaronmiller.github.io/Bootstrap-Portfolio/assets/images/dogfight.jpg"
                    alt="RPG game demo" style={{ width: "200px" }} /></a>
                  <h3>RPG game demo</h3>
                  <h5><a href="https://github.com/aaaronmiller/unit-4-game">
                    (Git repository)</a></h5>
                </div><br />

                <div class="work">
                  <a href="https://aaaronmiller.github.io/TriviaGame/"><img src="https://aaaronmiller.github.io/Bootstrap-Portfolio/assets/images/trivia.jpg" alt="Trivia Game"
                    style={{ width: "200px" }} /></a>
                  <h3>Trivia Game</h3>
                  <h5><a href="https://github.com/aaaronmiller/TriviaGame">
                    (Git repository)</a></h5>
                </div><br />

                <div class="work">
                  <a href="https://aaaronmiller.github.io/giphyhomework/"><img src="https://aaaronmiller.github.io/Bootstrap-Portfolio/assets/images/giphy.jpg"
                    alt="Giphy API Demonstration" style={{ width: "200px" }} /></a>
                  <h3>Giphy API Demonstration</h3>
                  <h5><a href="https://github.com/aaaronmiller/giphyhomework">
                    (Git repository)</a></h5>
                </div><br />

                <div class="work">
                  <a href="https://github.com/aaaronmiller/liri-node-app"><img src="https://aaaronmiller.github.io/Bootstrap-Portfolio/assets/images/liribot.jpg"
                    alt="Giphy API Demonstration" style={{ width: "200px" }} /></a>
                  <h3>LIRI node.js application</h3>
                  <h4><a href="https://youtu.be/OQJUa90TNFE">(Video demonstration)</a></h4>
                  <h5><a href="https://github.com/aaaronmiller/liri-node-app">
                    (Git repository)</a></h5>
                </div><br />

                <div class="work">
                  <a href="https://github.com/aaaronmiller/bamazon"><img src="https://aaaronmiller.github.io/Bootstrap-Portfolio/assets/images/bamazon.jpg"
                    alt="Bamazon node.js app" style={{ width: "200px" }} /></a>
                  <h3>Bamazon node.js application</h3>
                  <h4><a href="https://youtu.be/558zRka-hXE">(Video demonstration)</a></h4>
                  <h5><a href="https://github.com/aaaronmiller/bamazon">
                    (Git repository)</a></h5>
                </div><br />
              </div>
            </div>
          }
          dark={true}
          id="section3"
        />
        <Section
          title="Contact"
          subtitle={
            <div>
              <form id="contact-form" >
                <ul>
                  <li style={{ textAlign: "left" }}>
                    <p>
                      <label for="name" >Name: </label >
                      <span style={{ padding: "0px 0px 0px 20px" }}>
                        <input type="text" id="name" name="name" required="required" />
                      </span>
                    </p>
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <p>
                      <label for="email">Email: </label>
                      <span style={{ padding: "0px 0px 0px 24px" }}>
                        <input type="email" id="email" name="email" required="required" />
                      </span>
                    </p>
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <p>
                      <span style={{ margin: "0px 0px 30px 0px" }}>
                        <label for="message" >Message: </label>
                      </span>
                      <span >
                        <textarea id="message" name="message" rows="5" cols="33" required="required" style={{ verticalAlign: "sub" }}>
                        </textarea>
                      </span>
                      <p>
                        <input type="submit" />
                      </p>
                    </p>
                    <div style={{ color: "black" }}>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                      <p>
                        .</p>
                    </div>

                  </li>
                </ul>
              </form>
            </div>
          }
          dark={false}
          id="section4"
        />
        <Section
          title="Credits"
          subtitle={
            <div>

              <span>
                Thanks to my friends and family!
                   </span>
              <div style={{ color: "#333" }}>

                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
                <p>
                  .</p>
              </div>
            </div>
          }
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;

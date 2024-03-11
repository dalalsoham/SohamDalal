import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import twitterClone from "../../Assets/Projects/twitter_clone_png.png";
import mumbaiSailing from "../../Assets/Projects/mumbai_sailing_png.png";
import portfolioTemp from "../../Assets/Projects/portfolio_template_png.png";
import keyboardNinja from "../../Assets/Projects/Keyboard_ninja_png.png";
import blockCutter from "../../Assets/Projects/block_cutter_png.png";
import anisearchWeb from "../../Assets/Projects/anisearch_web_png.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keyboardNinja}
              isBlog={false}
              title="Keyboard Ninja"
              description="Discover your typing prowess with our Speed Tester! Assess your words-per-minute and accuracy in real-time. Engage in dynamic exercises and enhance your typing skills. Unlock your full typing potential effortlessly with our user-friendly interface."
              ghLink="https://github.com/dalalsoham/Keyboard-Ninja"
              demoLink="https://keyboard-ninja.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anisearchWeb}
              isBlog={false}
              title="AniSearch Web"
              description="Explore the world of anime seamlessly with our dedicated tracking website. Stay updated on your favorite shows, discover new releases, and access detailed information on characters, plots, and genres. Personalize your anime journey and never miss an episode with our intuitive tracking features. (docker pull mrsdjack003/anisearch-web:latest)"
              ghLink="https://github.com/dalalsoham/AniSearch-Web"
              demoLink="https://anisearch-web.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioTemp}
              isBlog={false}
              title="Portfolio Template"
              description="Step into my digital world! Explore a showcase of my diverse skills and projects on my portfolio website. From web development to design, discover the creative journey that defines me. Engage with my work and let's connect to bring your ideas to life."
              ghLink="https://github.com/dalalsoham/SOHAM_DALAL"
              demoLink="https://soham-dalal-dalalsoham.vercel.app/"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitterClone}
              isBlog={false}
              title="Twitter Clone"
              description="Unleash your thoughts with our Twitter clone. Connect, share, and stay informed. Experience the essence of microblogging in a familiar and user-friendly environment."
              ghLink="https://github.com/dalalsoham/twitter_clone"
              demoLink="https://twitter-clone-psi-rose.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockCutter}
              isBlog={false}
              title="Block Cutter Game"
              description="Block Cutter is an engaging and addictive online game that combines precision, strategy, and quick reflexes. The game presents players with a grid of colorful blocks, and their objective is to strategically cut these blocks using a virtual cutting tool. The challenge lies in slicing the blocks precisely to achieve the highest score while avoiding obstacles and completing levels within the time limit."
              ghLink="https://github.com/dalalsoham/Menja-Game-1.0.github.io"
             demoLink="https://dalalsoham.github.io/Menja-Game-1.0.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mumbaiSailing}
              isBlog={false}
              title="Mumbai Sailing Escapes"
              description="Designed and developed a dynamic sailing company website, seamlessly blending elegance and functionality. Captured the essence of maritime adventure through engaging visuals and intuitive navigation, enhancing the online presence and user experience. Delivered a tailored platform that mirrors the client's commitment to excellence in the sailing industry."
              ghLink="https://github.com/dalalsoham/mumbai-sailing"
              demoLink="https://mumbai-sailing-escapes.vercel.app/"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

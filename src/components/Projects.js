import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: 'Find Place in Cambodia',
      description:
        'Travel & Tourism Website :ជជាគេហទំព័រសម្រាប់ណែនាំអ្នកទេសចរឱ្យស្គាល់ពីតំបន់កម្សាន្តនានាក្នុងប្រទេសកម្ពុជា ដាក់បញ្ចូលនូវផែនទី (Map) ដែលបង្ហាញពីទីតាំងពិតប្រាកដនៃតំបន់ទេសចរណ៍នីមួយៗ។',
      imgUrl: projImg1,
    },
    {
      title: 'Full Stack Web Development',
      description:
        'PHP, MySQL Development: វេទិកាទិញទំនិញតាមអនឡាញ ដែលផ្តោតលើការគ្រប់គ្រងទិន្នន័យផលិតផល (Inventory Management) និងប្រព័ន្ធកន្ត្រកទំនិញ (Shopping Cart)។',
      imgUrl: projImg2,
    },
    {
      title: 'Static Web Design',
      description:
        'Design & Development :ជាគម្រោងវេបសាយបែបព័ត៌មាន និងបង្ហាញផលិតផល (ដូចជាហាងកាមេរ៉)។',
      imgUrl: projImg3,
    },
    {
      title: 'Static Web Design',
      description: 'Design & Development',
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my recent work showcasing modern web development with clean code, responsive design, and user-focused experiences. Each project demonstrates different aspects of full-stack development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>More projects coming soon! I'm constantly working on new and exciting applications. Stay tuned for updates showcasing my latest work in web development and design.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Have a project in mind? Feel free to reach out through the contact form. I'm always open to discussing new opportunities and collaborations.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Decorative background shape" />
    </section>
  )
}

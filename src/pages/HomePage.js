import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../styles/HomePage.module.css';
import MathPhoto from './MathsQuizzes/images/riddles.png';
import csPhoto from './TimeLimitQuizzes/images/cs.png';
import swPhoto from './FunQuizzes/images/star-wars.webp';
import { Link } from 'react-router-dom';



const HomePage = () => {
    return (
        <>
            <div className={`${styles.hero} text-center`}>
                <div className={styles.title}>Welcome to the world of <p style={{ color: 'purple', fontWeight: 'bold', fontFamily: 'Rubik Doodle Shadow' }}>QuizzLandia!</p>Where Knowledge Meets Fun!</div>
                <div className={styles.text}>Are you ready to challenge your intellect and have a blast doing it?
                    Look no further! QuizMania is your ultimate destination for mind-bending
                    quizzes that cater to every interest and curiosity. Whether you're a
                    trivia whiz or just looking for a good time, we've got something for
                    everyone.</div>

                <span className={styles.text1}>  🚀 Get Started - Click, Play, Quiz!</span>

            </div>


            <div className={`${styles.main} container-fluid text-center `}>
                <div className="row content">
                    <div className="col-sm-2 sidenav">
                        {/* <p><Link to="/" className='text-decoration-none'>Link</Link></p>
                        <p><Link to="/" className='text-decoration-none'>Link</Link></p>
                        <p><Link to="/" className='text-decoration-none'>Link</Link></p> */}
                    </div>
                    <div className="col-sm-8 text-left">
                        <h1>Quizzes</h1>
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                            <Link to="/maths" className='text-decoration-none'>
                                <Button className="btn-light btn-outline-danger btn-lg">Maths</Button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/timelimit" className='text-decoration-none'>
                                    <Button className="btn-light btn-outline-success btn-lg">Time Limit</Button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cs" className='text-decoration-none'>
                                    <Button className="btn-light btn-outline-warning btn-lg">Computer Science</Button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/fun" className='text-decoration-none'> <Button className=" btn-light btn-outline-info btn-lg">Fun</Button></Link>
                            </li>

                        </ul>
                        <hr />
                        <Container fluid="md">
                            <Row>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={MathPhoto} />
                                        <Card.Body>
                                            <Card.Title>Math Riddles Quiz</Card.Title>
                                            <Card.Text>
                                                Math Riddles Quiz is a challenging collection of mathematical
                                                puzzles designed to test your problem-solving skills.
                                                Put your mathematical prowess to the test and enjoy a
                                                brain-teasing experience with this engaging quiz.
                                            </Card.Text>
                                            <Button variant="primary"> <Link to="/quiz/4" className='text-white text-decoration-none'>Take Quiz</Link></Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={csPhoto} />
                                        <Card.Body>
                                            <Card.Title>Computer Science Quiz</Card.Title>
                                            <Card.Text>
                                                The Computer Science Quiz is a comprehensive examination that delves into
                                                various facets of computer science. Challenge your knowledge
                                                and enhance your understanding of key concepts with this enlightening quiz.
                                            </Card.Text>
                                            <Button variant="primary"> <Link to="/quiz2/4" className='text-white text-decoration-none'>Take Quiz</Link></Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={swPhoto} />
                                        <Card.Body>
                                            <Card.Title>Star Wars Quiz</Card.Title>
                                            <Card.Text>
                                                Embark on an epic journey through the Star Wars universe with this
                                                captivating quiz. Test your knowledge of the Force, iconic
                                                characters, and galaxies far, far away as you immerse
                                                yourself in the thrilling world of Star Wars. May the trivia
                                                be with you!
                                            </Card.Text>
                                            <Button variant="primary"><Link to="/quiz3/3" className='text-white text-decoration-none'>Take Quiz</Link></Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="col-sm-2 sidenav">
                        {/* <div className="well">
                            <p>ADS</p>
                        </div>
                        <div className="well">
                            <p>ADS</p>
                        </div> */}
                    </div>
                </div>
            </div>


        </>
    )
}

export default HomePage
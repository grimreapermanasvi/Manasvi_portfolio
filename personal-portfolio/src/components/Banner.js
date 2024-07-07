import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assests/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const  Banner =() => {
    const [loopNum, setLoopNum] =useState(0);
    const [isDeleting,setIsDeleting] =useState(false);
    const toRotate =["Web Developer","ML Enthusiast","UI/UX Designer"];
    const [text,setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100)
    const period =2000;

    useEffect(() =>{
        let ticker =setInterval(() => {
            tick();
        },delta )

        return () => { clearInterval(ticker)};
    }, [text])

    const tick =() => {
        let i=loopNum %toRotate.length;
        let fullText =toRotate[i];
        let updateText =isDeleting ? fullText.substring(0, text.length- 1): fullText.substring(0, text.length + 1);

        setText(updateText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi, I'm Manasvi Srivastava"} </h1><h3><span className="wrap">{text}</span></h3>
                        <p>I'm a passionate and driven engineering student currently pursuing a BTech in Computer Science Engineering at Banasthali Vidyapeeth in Rajasthan, India. With a keen interest in developing analytical and technical skills, I'm always on the lookout for opportunities to grow and contribute to innovative projects.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                        </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/profile.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
  const period = 2000;
  const bannerRef = useRef(null);

  // Generate animated dots
  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const dots = [];
    for (let i = 0; i < 40; i++) {
      const dot = document.createElement('div');
      dot.className = 'star-dot';
      const size = Math.random() * 4 + 3; // 3px to 7px
      dot.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: #00ff88;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        opacity: 0;
        box-shadow: 0 0 ${size * 2}px #00ff88, 0 0 ${size * 4}px #00ff8855;
        animation: dotTwinkle ${2 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 4}s;
        pointer-events: none;
        z-index: 0;
      `;
      banner.appendChild(dot);
      dots.push(dot);
    }

    // Generate diagonal lines
    for (let i = 0; i < 4; i++) {
      const line = document.createElement('div');
      line.className = 'shoot-line';
      line.style.cssText = `
        position: absolute;
        height: 1px;
        width: ${150 + Math.random() * 250}px;
        top: ${Math.random() * 100}%;
        left: 0;
        background: linear-gradient(90deg, transparent, rgba(0,255,136,0.2), transparent);
        transform: rotate(${-10 - Math.random() * 20}deg);
        animation: shootAcross ${6 + Math.random() * 8}s linear infinite ${Math.random() * 6}s;
        pointer-events: none;
        z-index: 0;
      `;
      banner.appendChild(line);
      dots.push(line);
    }

    return () => {
      dots.forEach((d) => d.remove());
    };
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prevDelta) => prevDelta / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home" ref={bannerRef}>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm SOMBATH`}{' '}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='["Web Developer", "Web Designer", "UI/UX Designer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Computer Science student & Web Developer. I build modern,
                    responsive web applications with a focus on performance,
                    security, and clean architecture. Turning ideas into
                    functional code is what I do best.
                  </p>
                  <button onClick={() => console.log('connect')}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <div className="green-frame">
                    <div className="green-frame__ring outer"></div>
                    <div className="green-frame__ring middle"></div>
                    <div className="green-frame__ring inner"></div>
                    <div className="green-frame__orbit">
                      <div className="green-frame__dot"></div>
                    </div>
                    <div className="green-frame__img-wrap">
                      <img src={headerImg} alt="Header Img" />
                    </div>
                    <div className="green-frame__glow"></div>
                    <div className="green-frame__scanlines"></div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

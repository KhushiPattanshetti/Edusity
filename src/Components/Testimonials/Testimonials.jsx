import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  const tx = useRef(0);

  const slideForward = () => {
    if (tx.current > -300) { // 4 slides → max -300%
      tx.current -= 100;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 100;
      slider.current.style.transform = `translateX(${tx.current}%)`;
    }
  };

  return (
    <div className="testimonials">
      <img src={back_icon} alt="Back" className="back-icon" onClick={slideBackward} />
      <img src={next_icon} alt="Next" className="next-icon" onClick={slideForward} />

      <div className="slider-container">
        <div className="slider" ref={slider}>
          <div className="slide">
            <div className="user-info">
              <img src={user_1} alt="User 1" />
              <div>
                <h3>Lily Peterson</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              Choosing to study at Edusity was one of the best decisions I've ever made. The faculty is incredibly supportive, and the curriculum is designed to prepare us for real-world challenges. I feel confident about my future thanks to this program.
            </p>
          </div>

          <div className="slide">
            <div className="user-info">
              <img src={user_2} alt="User 2" />
              <div>
                <h3>William Johnson</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              The faculty is incredibly supportive, and the curriculum is designed to prepare us for real-world challenges. I feel confident about my future thanks to this program.
            </p>
          </div>

          <div className="slide">
            <div className="user-info">
              <img src={user_3} alt="User 3" />
              <div>
                <h3>Amanda Hope</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              The best part about Edusity is the emphasis on hands-on learning. I’ve had opportunities to work on real projects and internships during my studies.
            </p>
          </div>

          <div className="slide">
            <div className="user-info">
              <img src={user_4} alt="User 4" />
              <div>
                <h3>Thomas Cook</h3>
                <span>Edusity, USA</span>
              </div>
            </div>
            <p>
              Edusity helped me grow both professionally and personally. The diverse community and amazing faculty made every day a great learning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

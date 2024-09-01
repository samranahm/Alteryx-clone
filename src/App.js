import './App.css';
import React, { useState, useEffect } from 'react';
import client from './components/authPage';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Media Import 
import numbers_video from './assets/media/Videos/numbers.mp4';
import cool_video from './assets/media/Videos/cool_video.mp4';
import call_center from './assets/media/Videos/call_center.mp4'
// import pic from './assets/media/pictures/pic.avif';

// Components
import Features from './components/Features';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import Header from './components/Header';
import CurrentHeader from './components/CurrentHeader';
import Test from './components/test';

// My Array

const images = [
  require('./assets/media/pictures/1.png'),
  require('./assets/media/pictures/2.png'),
  require('./assets/media/pictures/3.png'),
  require('./assets/media/pictures/4.png'),
  require('./assets/media/pictures/5.png'),
];



function App({ setCurrentUser }) {
  // My States
  const [currentUser, setCurrentUserState] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openDialogIndex, setOpenDialogIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    client.get('/api/user/', { withCredentials: true })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching user:', error);
  });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const submitLogout = (e) => {
    e.preventDefault();
    client.post('/api/logout/', {})
      .then(res => {
        setCurrentUserState(false);
        setCurrentUser(false);
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };
  



  const linkedin = () => {
    window.location.href = 'http://linkedin.com/in/samranahmed';
  };

  const toggleDialog = (index) => {
    setOpenDialogIndex(openDialogIndex === index ? null : index);
    setCurrentImage(images[index - 1]);
  };

  if (currentUser) {
    return (
      <div className='current-user-header'>
        <CurrentHeader submitLogout={submitLogout} />
        <div className="current-main-page">
          <img src="/media/pexels-googledeepmind-17485633.jpg" alt="Sample" />
        </div>
      </div>
    );
  }

  return (
    <div className="body">
      <Header />
      <div className='animation-container'>
        <div className='animation-container-text'>
          <h1><b>Enhance Your<br /> Analytics with AI</b></h1>
          <p>Solve problems at the new speed of business with a trusted analytics platform.</p>
          <div className='animation-container-button'>
            <button className='button learn-more' onClick={submitLogout}>Log out</button>
            <button className='button watch-now' onClick={linkedin}>Watch Now</button>
          </div>
        </div>
      </div>
      <div className="slide_container">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          <div className="slide-one">
            <h2>AiDIN Copilot: AI-Powered Analytics, Accelerated</h2>
            <p>Streamline workflows, get answers faster with AiDIN Copilot.</p>
            <button className='button learn-more'>Learn More</button>
          </div>
          <div className="slide-two">
            <h2>Data Aggregation unlocks Generative AI in enterprises</h2>
            <p>Read about new updates and enhancements coming to the AI platform for enterprise Analytics</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className='media_container'>
        <div className='media_container_video'>
          <video width={600} controls>
            <source src={numbers_video} type='video/mp4'/>
          </video>
        </div>
        <div className='media_container_text'>
          <h1>See the Alteryx AI Platform <br />in Action</h1>
          <p>See how Alteryx uses AI for smarter, data-driven decision making.</p>
          <div className='media_container_text_button'>
            <Link to="/test" className='button learn-more'>Learn More</Link>
            <button className='button start_free_trail'>Start Free Trail</button>
          </div>
        </div>
      </div>
      <div className='media_container'>
        <div className='media_container_text'>
          <h1>Analytics at the Speed of F1</h1>
          <p>See how McLaren Racing uses Alteryx to gain an edge on the track.</p>
          <button className='button learn-more'>Learn More</button>
        </div>
        <div className='second_media_container_video'>
          <video width={600} controls>
            <source src= {cool_video} type='video/mp4'/>
          </video>
        </div>
      </div>
      <div className='picture_container'></div> 
      <div className='after_pic_container'>
        <div className='after_pic_container_text'>
          {/* Buttons with attached click handlers to toggle the dialogs */}
          <button onClick={() => toggleDialog(1)}><h2>Button one</h2></button>
          {openDialogIndex === 1 && <div className='dialog-box'>Dialog for Button oneTo generate random text in JavaScript, you can use various approaches
             depending on the type of text you want to generate. Here are a few common methods:
             <button>Learn More 1</button></div>}
          
          <button onClick={() => toggleDialog(2)}><h2>Button two</h2></button>
          {openDialogIndex === 2 && <div className='dialog-box'>Dialog for ButtoTo generate random text in JavaScript,
             you can use various approaches depending on the type of text you want to generate. Here are a few common methods:n two
             <button>Learn more 2</button>
             </div>}
          
          <button onClick={() => toggleDialog(3)}><h2>Button three</h2></button>
          {openDialogIndex === 3 && <div className='dialog-box'>Dialog To generate random text in JavaScript, you can use va
            rious approaches depending on the type of text you want to generate. Here are a few common methods:for Button three
            <button>learn more 3</button></div>}
          
          <button onClick={() => toggleDialog(4)}><h2>Button four</h2></button>
          {openDialogIndex === 4 && <div className='dialog-box'>Dialog foTo generate random text in JavaScript,
             you can use various approaches depending on the type of text you want to generate. Here are a few common 
             methods:r Button four
             <button>Learn more 4</button></div>}
          
          <button onClick={() => toggleDialog(5)}><h2>Button five</h2></button>
          {openDialogIndex === 5 && <div className='dialog-box'>Dialog for ButTo generate random text in JavaScript,
             you can use various approaches depending on the type of text you want to generate. 
             Here are a few common methods:ton five
             <button>learn more 5</button></div>}
        </div>
        <div className='after_pic_container_img'>
        <img src={currentImage} alt="Selected"/>
        </div>
      </div>
      <div className='after_states_container'>
      
          <h2>Don’t Take Our Word For It</h2>
          <p>Alteryx Maveryx share how our platform is driving game-changing, cost-saving and value driven results.</p>
             <video controls>
              <source src={call_center} type='video/mp4'/>
            </video>
      </div>    
    </div>
  );
}

function RoutesConfig() {
  // const [currentUser, setCurrentUser] = useState(false);

  return (
    <Router>
      <Routes>
      {/*  <Route path="/" element={<App setCurrentUser={setCurrentUser} />} />
        <Route path="/register" element={<Register setCurrentUser={setCurrentUser} />} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />*/}
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default RoutesConfig;

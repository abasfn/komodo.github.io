import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './component/menu/menu.compnent';
import Row1 from './component/row1/row1.component';
import Row2 from './component/row2/row2.component';
import Row3 from './component/row3/row3.component';
import Row4 from './component/row4/row4.component';
import Row5 from './component/row5/row5.component';
import Row6 from './component/row6/row6.component';
import Row7 from './component/row7/row7';
import Row8 from './component/row8/row8.comonent';
import Row9 from './component/row9/row9.component';
import Row10 from './component/row10/row10.component';
import Footer from './component/footer/footer.component';

function App() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="App">
      <div className='bg-menu'>
        <Menu />
      </div>
      <div className='bg-row1'>
        <Row1 />
      </div>
      <div className='mt-10'>
        <Row2 />
      </div>
      <div className='bg-row1'>
        <Row3 />
      </div>
      <div className='bg-white'>
        <Row4 />
      </div>
      <div className='space1'></div>
      <div className='bg-row1'>
      <Row5/>
      </div>
      <div className='bg-white'>
      <Row6/>
      </div>
      <div className='space1'></div>
      <div className='bg-row1'>
      <Row7/>
      </div>
      <div className='space1'></div>
      <div className='bg-white'>
      <Row8/>
      </div>
      <div className='space1'></div>
      <div className='bg-row9'>
      <Row9/>
      </div>
      <div className='bg-row1'>
      <Row10/>
      </div>
      <div className='bg-row9'>
      <Footer/>
      </div>
      {showButton && (
          <img onClick={scrollToTop} className="back-to-top" src="images/Emoticon/icons8-send-letter-48.png" alt="toplist" />
      )}
    </div>
  );
}

export default App;

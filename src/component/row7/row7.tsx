import React from 'react';
import ColorfulButton from '../button/colorfulbutton.component';
import Paragraph from '../paragraph/paragraph.component';

const Row7 = () => {
  return (
    <div className='container'>
      <div className="row row-cols-1 row-cols-lg-2">
        <div className='mt-ro7'>
          <img className='d-none d-md-block' src="images/Emoticon/download-image.png" alt="big-img" />
        </div>
        <div>
          <div className='space1'></div>
          <Paragraph textalign='text-center' title='دانلود اپلیکیشن' className='text-light fs-2' />
          <Paragraph textalign='text-center' title='نسخه اندروید اپلیکیشن کمدا توی گوگل پلی/ کافه بازار/ مایکت برای دانلود موجود هست نسخه iOS هم توی اناردونی/ آی‌اپس قابل دانلود هست. در صورت مشکل، از نسخه وب(لینک) هم می‌تونی بهمون ملحق بشی.' className='text-light fs-5 mt-4' />
          <div className="row row-cols-2 w-lg-100 w-xl-100 row-cols-md-3">
              <ColorfulButton title='مایکت' />
              <ColorfulButton title='کافه بازار' />
              <ColorfulButton title='گوگل‌پلی' />
          </div>
          <div className="row row-cols-2 w-75 w-md-100 m-auto">
            <ColorfulButton title='آی اپس' />
            <ColorfulButton title='اناردونی' />
          </div>
          <div className="w-50 m-auto">
            <ColorfulButton title='ورود به اپلیکیشن کمدا' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row7;
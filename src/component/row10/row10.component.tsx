import React from 'react';
import Application from '../application/application.component';
import Paragraph from '../paragraph/paragraph.component';

const Row10 = () => {
    const model = [
        { title: 'کُمُجای شیراز: جهانگردی کُمُجای تهران: ساختمان (2) نوآوری شریف', src: 'images/Emoticon/icons8-map-24.png' },
        { title: 'پشتیبانی: 982191075632+', src: 'images/Emoticon/icons8-incoming-call-24.png'},
        { title: 'info@komodaa.com', src: 'images/Emoticon/icons8-email-24.png' },
        { title: 'اینستاگرام کمدا', src: 'images/Emoticon/icons8-instagram-logo-24.png' },
        { title: 'توئیتر کمدا', src: 'images/Emoticon/icons8-twitter-26.png' },
        { title: 'تلگرام کمدا', src: 'images/Emoticon/icons8-telegram-app-24.png' },
        
    ]
    return (
        <div className='container'>
            <div className='spacerow10'></div>
            <Paragraph textalign='text-center' title='پیدامون کن' className='text-color-title fs-4' />
            <div className='spacerow10'></div>
             <div className='row mt-2'>
            <Application model={model}/>
             </div>
            <div className='spacerow10'></div>
        </div>
    );
};

export default Row10;
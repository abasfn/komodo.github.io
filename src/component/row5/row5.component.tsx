import React from 'react';
import Paragraph from '../paragraph/paragraph.component';

const Row5 = () => {
    return (
        <div className='container'>
        <div className='space1'></div>
        <Paragraph textalign='text-center' title='چه شکلیه؟' className='text-light fs-4' />
        <Paragraph textalign='text-center' title='کمدا| شبکه اجتماعی خرید و فروش' className='text-light fs-1' />
        <div className='space-row1'></div>
        <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <img className='mt-3 m-auto' alt='page-prifile' src='images/Emoticon/gallery-2.jpg'/>
            <img className='mt-3 m-auto' alt='page-prifile' src='images/Emoticon/gallery-4 -3.jpg'/>
            <img className='mt-3 m-auto' alt='page-prifile' src='images/Emoticon/gallery-4.jpg'/>
        </div>
        </div>
        <div className='space-row1'></div>
    </div>
    );
};

export default Row5;
import React from 'react';
import Button from '../button/button.component';
import Paragraph from '../paragraph/paragraph.component';

const Row1 = () => {
    return (
        <>
            <div className='space-row1'></div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-7">
                <Paragraph title='کمدا شبکه اجتماعی خرید و فروش' className='text-light fs-1 mt-5' />
                <Paragraph title='کُمُدا یه شبکه اجتماعی برای خرید و فروش‌ تعاملی با هم‌سلیقه‌هاست که یک میلیون خانم از کل ایران توش کمد دارن. شیک‌پوش‌ها،‌کتابخورها، بیوتی‌میوتی‌ها و مارکوپولوها تو کمدا دور هم جمعن. تو هم بیا!' className='text-color-p fs-5 mt-4' />
                <Button className='w-75 fs-5 p-3 mt-3 bg-bigbutton text-light' title='تا در سرزمین عجایب به روت بازه، از اینجا عضو کمدا شو.' />
                <div className='space'></div>
                </div>
                <div className="col-sm-12 d-none d-md-block col-md-5">
                    <img className='position-absolute rounded' src='images/Emoticon/Capture.PNG' alt='Phone images'/>
                </div>
            </div>
        </div>
        </>
    );
};

export default Row1;
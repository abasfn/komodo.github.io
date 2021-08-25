import React from 'react';
import Paragraph from '../paragraph/paragraph.component';

const Row2 = () => {
    return (
        <>
            <div className='space1'></div>
            <div className='container'>
                <img src='images/Emoticon/about-logo.png' alt='LOGO' />
                <Paragraph title='کُمُدا چیه؟' className='text-color-title fs-4 mt-4' />
                <Paragraph title='چیز میزای خوشگل تر و تمیز که دوستش داری، هدیه گرفتی، اندازت نیست، یا فقط یه بار استفاده کردی و توی کمدت فقط جا گرفته و خاک میخوره رو بیار توی کُمُدا، به پول تبدیل کن! از اون طرف هم با 50-70% تخفیف هم از کمد بقیه چیز میز جدید و عتیقه بخر، به بی نهایت کمد سرک بکش، فالوشون کن، باهاشون گپ بزن، ازشون خرید کن! ما یه جمع دوستانه با دغدغه های محیط زیستی هستیم که هدف‌مون توی کمدا بازگردوندن آیتم های مازاد(نو،در حد نو ) به چرخه مصرف، کاهش مصرف گرایی و حفاظت از محیط زیست هست.' className='text-color-paragraph  fs-5 mt-4' />
                <div className='space1'></div>
            </div>
        </>
    );
};

export default Row2;
import React from 'react';
import BoxsProfile from '../boxs-profile/boxsprofilex.component';
import Paragraph from '../paragraph/paragraph.component';

const Row6 = () => {
    return (
        <>
            <div className="container">
                <div className='space1'></div>
                <div className="row row-cols-1 row-cols-lg-3">
                    <div>
                        <Paragraph title='چیا داریم؟' className='text-color-title fs-4 mt-4' />
                        <Paragraph title='لباس، زیورآلات، لوازم آرایشی و بهداشتی، کتاب، اکسسوری‌های خونه، دست سازه های سالم و نو. همه مون یه سری چیزایی داریم که یا هدیه/ سوغاتی گرفتیم، اندازمون نیستن، یه بار استفاده کردیم و دیگه نمی کنیم، رنگش بهمون نمیاد و بی استفاده توی کمدمون موندن، همه اینارو می‌تونیم برای فروش بیاریم توی کمدا و با 50-70% تخفیف برای فروش بذاریم. از هر آیتم توی کمدا فقط یه دونه هست، خرید کردن توی کمدا مثل ماهی گیری میمونه!' className='text-color-title mt-4 fs-5' />
                    </div>
                    <div>
                        <BoxsProfile title='شلوار و جوراب' src='images/Emoticon/icons8-socks-24.png' srcBoxs='images/Emoticon/arze-1.jpg' />
                        <BoxsProfile title='اکسسوری و زیورآلات' src='images/Emoticon/icons8-watch-24.png' srcBoxs='images/Emoticon/arze-2.jpg' />
                        <BoxsProfile title='کفش' src='images/Emoticon/icons8-flip-flops-24.png' srcBoxs='images/Emoticon/arze-3.jpg' />
                        <BoxsProfile title='کیف' src='images/Emoticon/icons8-bag-24.png' srcBoxs='images/Emoticon/arze-4.jpg' />
                    </div>
                    <div>
                        <BoxsProfile title='کت و دامن' src='images/Emoticon/icons8-socks-24.png' srcBoxs='images/Emoticon/arze-5.jpg' />
                        <BoxsProfile title='مانتو' src='images/Emoticon/icons8-watch-24.png' srcBoxs='images/Emoticon/arze-6.jpg' />
                        <BoxsProfile title='دست سازه‌ها' src='images/Emoticon/icons8-flip-flops-24.png' srcBoxs='images/Emoticon/arze-7.jpg' />
                        <BoxsProfile title='لباس دخترانه' src='images/Emoticon/icons8-bag-24.png' srcBoxs='images/Emoticon/arze-8.jpg' />
                    </div>
                </div>
            </div>
            <div className='space-row1'></div>
        </>
    );
};

export default Row6;
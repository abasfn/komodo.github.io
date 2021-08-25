import React from 'react';
import ListFootet from '../list-footer/list-footer.component';
import Paragraph from '../paragraph/paragraph.component';

const Footer = () => {
    const model = [
        {title:'خونه'},
        {title:'چرا کُمُدا؟'},
        {title:'چیا داریم؟'},
        {title:'حریم خصوصی'},
        {title:'فخرفروشی'},
        {title:'پیدامون کن!'},
        {title:'فرصت‌های شغلی'},
    ]
    const model1 = [
        {title:'کُمُدا چیه؟'},
        {title:' چه شکلیه؟'},
        {title:'قوانین و مقررات'},
        {title:'تعریف و تمجید'},
        {title:'سوال پیچ'},
        {title:' ثبت شکایت'},  
    ]
    return (
        <div className='container'>
            <div className='spacerow10'></div>
            <div className="row">
            <div className="col-12 col-md-7">
            <Paragraph title='کمدا | اپلیکیشنی برای خرید و فروش لباس، لوازم ارایشی-بهداشتی و کتاب با تخفیف بالای 50 درصد' className='text-dark fs-4' />
            <div className='d-flex'>
            <ListFootet model={model}/>
            <ListFootet model={model1}/>
            </div>
            <div className='d-flex'>
                <img width='78px' height='78px' src='images/Emoticon/logo.png' alt='logo'/>
                <img width='78px' height='78px'src='images/Emoticon/logo.png' alt='logo'/>
                <img width='78px' height='78px' src='images/Emoticon/nezam-senfi.png' alt='logo'/>
                <img className='rounded' width='78px' height='78px' src='images/Emoticon/komodaaAnjoman-1-150x150.jpg' alt='logo'/>
           </div>
            </div>
            <div className="col-12 col-md-5">
            <Paragraph title='رادیو مدا' className='text-dark fs-4' />
            </div>
            </div>
            <Paragraph textalign='text-center' title='Copyright ©2021 all right reserved by komodaa' className='text-color-title fs-5 mt-5' />
            <Paragraph textalign='text-center' title='تمامی حقوق مادی و معنوی این وبسایت برای کُمُدا محفوظ است و هر گونه کپی برداری بدون ذکر منبع پیگرد قانونی دارد.' className='text-color-title fs-5' />
            <div className='spacerow10'></div>
        </div>
    );
};

export default Footer;
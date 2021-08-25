import React from 'react';
import Button from '../button/button.component';
import Paragraph from '../paragraph/paragraph.component';

const Menu = () => {
    const farstMenu = [
        { title: 'خونه' },
        { title: 'کمدا چیه؟' },
        { title: 'چرا کمدا؟' },
        { title: 'چه شکلیه؟' },
        { title: 'قوانین و مقررات' },
        { title: 'تعریف و تمجید' },
        { title: 'سوال پیچ' },
        { title: 'پیدامون کن!' },
        { title: 'درباره ما' },
        { title: 'تماس با ما' },
        { title: 'شکایت' },
    ];

    return (
        <div className="container">
            <div className="row">
                <div className='col-sm-12 col-lg-1 mt-2 text-center text-lg-end'>
                    <img src='images/Emoticon/icons8-facebook-logo-50.png' />
                </div>
                <div className="col-lg-7 col-sm-12 container mt-3">
                    <div className="row row-cols-auto justify-content-center">
                        {farstMenu.map(item => {
                            return (
                                <Paragraph title={item.title} className='text-light fs-6' />
                            )
                        })}
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 container mt-2 mb-4">
                    <div className="row justify-content-start">
                        <div className='col-3'>
                            <Button className='w-100' title='رادیو مدا' />
                        </div>
                        <div className='col-3'>
                            <Button className='w-100' title='فروشگاه' />
                        </div>
                        <div className='col-6'>
                            <Button className='w-75' title='دانلود اپلیکشین' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
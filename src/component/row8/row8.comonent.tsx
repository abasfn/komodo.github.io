import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import ProfileComponent from '../profiletitle/profiletitle.component';

const Row8 = () => {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-lg-3">
             <div>
                <Paragraph title='فخرفروشی' className='text-color-title fs-4' />
                <Paragraph title='کُمُدای پنج ستاره !' className='text-color-title fs-6 mt-5' />
             </div>
             <div>
             <ProfileComponent classNameTitle='text-color-title fs-5 mt-1'  title='جزو 10 استارتاپ برتر ایران در مسابقه Seedstars سوئیس | 2017'  src='images/Emoticon/icons8-star-24.png'/>
             <ProfileComponent classNameTitle='text-color-title fs-5 mt-1'  title='رتبه اول مسابقه سالانه نوآوری و کارآفرینی در حوزه M-commerce | دانشگاه شیراز | 2017'  src='images/Emoticon/icons8-star-24.png'/>
             <ProfileComponent classNameTitle='text-color-title fs-5 mt-1'  title='رتبه اول در رویداد Silkroad Startup | شیراز | 2017'  src='images/Emoticon/icons8-star-24.png'/>
             </div>
             <div>
             <ProfileComponent classNameTitle='text-color-title fs-5 mt-1'  title='جزو 10 استارتاپ برتر ایران در مسابقه Seedstars سوئیس | 2017'  src='images/Emoticon/icons8-star-24.png'/>
             <ProfileComponent classNameTitle='text-color-title fs-5 mt-1'  title='رتبه اول مسابقه سالانه نوآوری و کارآفرینی در حوزه M-commerce | دانشگاه شیراز | 2017'  src='images/Emoticon/icons8-star-24.png'/>
             </div>
            </div>
        </div>
    );
};

export default Row8;
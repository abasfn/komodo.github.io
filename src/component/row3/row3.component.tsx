import React from 'react';
import Paragraph from '../paragraph/paragraph.component';
import ProfileComponent from '../profiletitle/profiletitle.component';

const Row3 = () => {
    return (
        <div className='container'>
            <div className='space1'></div>
            <Paragraph textalign='text-center' title='چرا کُمُدا؟' className='text-light fs-4' />
            <div className="row row-cols-1 row-cols-lg-3">
              <div>
             <ProfileComponent classNameTitle='text-light fs-4' title='پول-دار شو' paragraph='آیتم های اضافی ات رو بفروش و با پولش چیزمیزای مفید بخر. (مثلا یه کتاب جذاب، یه بلیت تئاتر، یا حتی یه لباس جدید دیگه!) بذار کمدت نفس بکشه.' src='images/Emoticon/icons8-euro-24.png'/>
             <ProfileComponent classNameTitle='text-light fs-4' title='دغدغه هامون' paragraph='توی کمپین های مسئولیت اجتماعی و محیط زیستی کُمُدا هم شریک باش.' src='images/Emoticon/icons8-heart-24.png'/>
             <ProfileComponent classNameTitle='text-light fs-4' title='فروش کاردستی' paragraph='اگه هنری داری می‌تونی کارهایی مثل اکسسوری‌جات رو با وضعیت "کاردستی" برای فروش بذاری.' src='images/Emoticon/icons8-full-shopping-basket-24.png'/>
              </div>
              <div>
                <img src='images/Emoticon/feature-image.png' alt='Align-images'/>
              </div>
              <div>
             <ProfileComponent classNameTitle='text-light fs-4' title='جامعه دوستانه فعال' paragraph='هم سلیقه هات رو پیدا کن و به کمدشون سرک بکش.' src='images/Emoticon/icons8-add-user-group-man-man-24.png'/>
             <ProfileComponent classNameTitle='text-light fs-4' title='خرید خاص' paragraph='برندهای دلخواه ات رو با تخفیف شاخدار بخر و فرهنگ ضدمصرف گرایی رو رواج بده.' src='images/Emoticon/icons8-full-shopping-basket-24.png'/>
             <ProfileComponent classNameTitle='text-light fs-4' title='خرید و فروش امن' paragraph='خریدت رو آنلاین پرداخت کن. پول‌ات تا رسیدن آیتم به دست‌ات پیش ما محفوظ میمونه. بعدش هزینه رو به حساب فروشنده واریز می‌کنیم.خیال‌ات راحت!' src='images/Emoticon/icons8-key-24.png'/>
              </div>
            </div>
        </div>
    );
};

export default Row3;
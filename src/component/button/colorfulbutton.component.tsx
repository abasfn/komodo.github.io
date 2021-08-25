import React from 'react';

type ColorfulButtonType ={
    title?:string;
}
const ColorfulButton = (props:ColorfulButtonType) => {
    return (
        <div className='p-2 m-auto'>
       <button className='bg-colorfulbutton border-0 p-4 w-100 text-white rounded'>{props.title}</button>
       </div>
    );
};

export default ColorfulButton;
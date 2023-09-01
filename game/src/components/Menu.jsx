import React from 'react';
import './Menu.css';

const Menu = ({onClick}) => { // onClick을 받아옴
    return (
        <div className='menu'>
            <button className='button' onClick={onClick}>
                게임 시작
            </button>
        </div>
    );
}

export default Menu;
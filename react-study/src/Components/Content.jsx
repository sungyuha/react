import React, { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';
//import { UserContext } from '../context/UserContext';

const Content = () => {
    // useContext사용
    const {isDark} = useContext(ThemeContext);
    //const user = UserContext(UserContext);
    
    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black',
            }}
        >
            <p>yuha님, 좋은 하루 되세요!</p>
        </div>
    );
};

export default Content;
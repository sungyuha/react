import React, { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

const Header = () => {
    // useContext 사용
    const {isDark} = useContext(ThemeContext);
    // console.log(isDark);
    const user = useContext(UserContext);

    return (
        <header
            className="header"
            style={{
                // 바탕색이 연한 회색
                backgroundColor: isDark ? 'black' : 'lightgray',
                // 글씨색은 검정색
                color: isDark ? 'white' : 'black',
            }}
        >
            <h2>Welcome {user}!</h2>
        </header>    
    );
};

export default Header;
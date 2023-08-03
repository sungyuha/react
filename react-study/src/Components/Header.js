import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    // useContext 사용
    const {isDark} = useContext(ThemeContext);
    // console.log(isDark);

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
            <h2>Welcome 유하!!</h2>
        </header>    
    );
};

export default Header;
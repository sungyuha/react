import React from "react";

const Header = ({ isDark} ) => {
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
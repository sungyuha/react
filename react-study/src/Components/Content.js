import React from "react";

const Content = ({ isDark} ) => {
    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? 'black' : 'while',
                color: isDark ? 'white' : 'black',
            }}
        >
            <p>유하님, 좋은 하루 되세요!</p>
        </div>
    );
};

export default Content;
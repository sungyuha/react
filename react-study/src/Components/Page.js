import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Context from './Content';
import Footer from './Footer';
import Header from './Header';

const Page = () => {
    // useContext 사용. ThemeContext에 대한 정보 받아옴
    const data = useContext(ThemeContext);
    console.log('data', data);

    return (
        <div className="page">
            <Header />
            <Context />
            <Footer />
        </div>
    );
};

export default Page;
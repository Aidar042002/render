import React from 'react';
import Header from './Header';
import Footer from "./Footer";

export default function MainPage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="d-flex justify-content-center align-items-center flex-grow-1">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/5375/5375305.png"
                    alt="Кнопка старта музыки"
                    style={{ width: '200px', height: '200px' }}
                />
            </div>
            <Footer/>
        </div>
    );
}

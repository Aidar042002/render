import React from 'react';
import Header from './Header';

export default function MainPage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="d-flex justify-content-center align-items-center flex-grow-1">
                <h1>Здесь будет включения кнопки старта музыки</h1>
            </div>
            <footer className="bg-dark text-white text-center py-3">
                <p>Здесь будет будетс трока с текущей песней</p>
            </footer>
        </div>
    );
}

import React from 'react';
import Header from './Header';

export default function MainPage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="d-flex justify-content-center align-items-center flex-grow-1">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-6">
                            <button className="btn btn-primary w-100 py-3">Кнопка 1</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-secondary w-100 py-3">Кнопка 2</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-success w-100 py-3">Кнопка 3</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger w-100 py-3">Кнопка 4</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-dark text-white text-center py-3">
                <p>Здесь будет строка с текущей песней</p>
            </footer>
        </div>
);
}

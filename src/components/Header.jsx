import React from 'react';

export default function Header(){

    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Радио</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Избранное</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Главная</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/account">Личный кабинет</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Вход</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
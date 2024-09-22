import Header from "./Header";
import React from "react";

export default function SignInPage(){
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="d-flex justify-content-center align-items-center flex-grow-1">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Войдите в аккаунт</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="username" name="username" placeholder="Username"/>
                        <label htmlFor="floatingInput">Введите логин</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Введите пароль</label>
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">Войти</button>

                    <div>
                        Нет аккаунта?<a href="/register">Зарегистрируйтесь</a>
                    </div>
                </form>
            </div>
            <footer className="bg-dark text-white text-center py-3">
                <p>Здесь просто футер</p>
            </footer>
        </div>
    );
}
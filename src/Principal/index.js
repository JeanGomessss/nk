import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export default function Principal (){
    return(
        <body>
            <header className="topo">
                <img className="logo" src="assets/logo.png"/>
                <nav className="menu">
                    <Link to='/Login' className="link">Entrar</Link>
                    <img className="compra" src="assets/compra.png"/>
                </nav>
            </header>

            <main>
                <div className="banner">
                    <h1>AIR FORCE</h1>
                </div>
                <div className="produtos">
                    <div className="card">
                        <img src="assets/air1.png" />
                    </div>

                    <div className="card">
                        <img src="assets/airblack.png" />
                    </div>
                    
                    <div className="card">
                        <img src="assets/airbrown.png" />
                    </div>
                    
                    <div className="card">
                        <img src="assets/aircustom.png" />
                    </div>
                </div>
            </main>

            <footer>
                    <img src="assets/justdoit.png" />
            </footer>



        </body>

    );
}
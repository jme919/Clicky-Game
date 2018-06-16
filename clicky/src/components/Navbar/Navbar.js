import React from "react";
import "./Navbar.css";

const Navbar = props =>
    <header className="container bg-info">
        <div className="row">
            <div className="col-sm-4 h3 mmc">Moving Memory Click</div>
            <div className="col-sm-4 h3 cai">Click an Image</div>
            <div className="col-sm-4">
                <div className="container">
                    <div className="row h3">Score:
            <div className="col-sm-6" id="currentScore">{props.score}</div>
                        Top Score:
            <div className="col-sm-6" id="topScore">{props.topScore}</div>
                    </div>
                </div>
            </div>
        </div>
    </header>


export default Navbar;
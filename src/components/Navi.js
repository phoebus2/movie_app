import React from "react";
import { Link } from "react-router-dom";
import "../components/Navi.css";

function Navi() {
    return (
        <div>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
        </div>
    )
}

export default Navi;
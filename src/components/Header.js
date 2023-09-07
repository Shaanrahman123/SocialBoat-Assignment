import React from "react";
import "../App.css";
import { Avatar } from "@mui/material";
import shaan from "../img/shaan.jpg"
import logo from "../img/logo.png"


export default function Header({ setSearchQuery, inputRef }) {
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
    };

    return (
        <header>
            <div className="header-container">
                <img src={logo} alt="Logo" />
                <div><input type="text" ref={inputRef} placeholder="Search..." onChange={handleSearch} /></div>
                <Avatar
                    alt="Remy Sharp"
                    src={shaan}
                    sx={{ width: 46, height: 46, border: "2px solid #fff" }}
                />
            </div>
        </header>
    );
}


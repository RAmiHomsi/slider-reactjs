import React from "react"
import "./style2.css"
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";



const Navbar = () => {
    return (
        <nav className="nav-container">
            <div className="wrapper">

                <div className="left">
                    <p className="language">EN</p>
                    <div className="search-container">
                        <input type="text" placeholder="Search" ></input>
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </div>
                </div>

                <div className="center">
                    <h1 className="logo">LAMA.</h1>
                </div>

                <div className="right">
                    <p className="menuitem">REGISTER</p>
                    <p className="menuitem">SIGN IN</p>
                    <div className="menuitem">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>

            </div>
        </nav>
    )
};

export default Navbar;
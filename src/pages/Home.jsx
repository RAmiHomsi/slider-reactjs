import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";


const Home = () => {
    return (
        <nav>
            <Announcement />
            <Navbar />
            <Slider />
        </nav>
    )
};

export default Home;
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <div className="slider-container">

            <div className="arrow-left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </div>

            {/*moving -100 in x-led*/}
            <div className="slider-wrapper" style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
                {sliderItems.map((item) => (
                    <div className="slide" style={{ backgroundColor: `#${item.bg}` }} key={item.id}>
                        <div className="imgcontainer">
                            <img src={item.img} alt="" height="80%" />
                        </div>
                        <div className="infocontainer">
                            <h1 style={{ fontSize: "70px" }}>{item.title}</h1>
                            <p className="description">{item.desc}</p>
                            <button className="button">SHOW NOW</button>
                        </div>
                    </div>
                ))}
            </div>


            <div className="arrow-right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </div>

        </div>
    )
};

export default Slider;
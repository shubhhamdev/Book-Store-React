import React from "react";

const FirstSection = ({ Img, styles }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <div
                style={{
                    backgroundImage: `url("../Assets/movie/background.png")`,
                    backgroundSize: "cover",
                    width: "300px",
                    height: "300px",
                }}>
                <img src={Img} alt="" />
            </div>
            <div className="MovieDiv" style={styles}>
                <div>
                    <h1 className="titleHead">Title</h1>
                    <p className="para1">
                        Description - Loreum ipsum dolor sit amet, consectetur
                        adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Massa elit lectus enim id euismod.
                        Gravida at praesent aliquam, at natoque at leo. Faucibus
                        quam ipsum mi eget consectetur posuere dui vulputate
                        magna.
                    </p>
                </div>
                <button className="nowRead">Now Read!</button>
            </div>
        </div>
    );
};

export default FirstSection;

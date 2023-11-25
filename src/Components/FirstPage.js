import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Img1 from "../Assets/movie/Frame 1.svg";
import Img2 from "../Assets/movie/Frame 2.svg";
import Img3 from "../Assets/movie/Frame 3.svg";
import auth from "../Auth/auth";
import FirstSection from "./FirstSection";

const FirstPage = ({ setClicked }) => {
    const navigate = useNavigate();

    const [harryBooks, setHarryBooks] = useState([]);
    const [holmesBooks, setHolmesBooks] = useState([]);

    function harryData() {
        auth.get("", {
            params: { q: "harry potter" },
        })
            .then((res) => {
                setHarryBooks(res.data.items);
            })
            .catch((err) => console.log(err));
    }

    function homesData() {
        axios
            .get("https://www.googleapis.com/books/v1/volumes", {
                params: { q: "Sherlock Holmes" },
            })
            .then((res) => {
                setHolmesBooks(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function newPage() {
        navigate("/clicked");
    }

    useEffect(() => {
        homesData();
        harryData();
    }, []);

    return (
        <div>
            <section className="heroSection">
                <FirstSection
                    Img={Img1}
                    styles={{
                        borderRadius: "5px",
                        background: "rgba(113, 197, 244, 0.38)",
                        boxShadow: "0px 6px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                />
                <FirstSection
                    Img={Img2}
                    styles={{
                        borderRadius: "5px",
                        background: "rgba(171, 113, 244, 0.38)",
                        boxShadow: "0px 6px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                />
                <FirstSection
                    Img={Img3}
                    styles={{
                        borderRadius: "5px",
                        background: "rgba(244, 113, 168, 0.38)",
                        boxShadow: "0px 6px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                />
            </section>

            <section className="mainSection">
                <div className="main-container" style={{ padding: "10px" }}>
                    <h3 style={{ marginBottom: "10px" }}>
                        More Books Like This
                    </h3>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "20px",
                        }}>
                        {harryBooks.map((book) => {
                            return (
                                <div
                                    style={{
                                        width: "15vw",
                                        height: "20vw",
                                    }}
                                    id={book.id}
                                    onClick={() => {
                                        setClicked(book);
                                        newPage();
                                    }}>
                                    <img
                                        src={
                                            book.volumeInfo.imageLinks.thumbnail
                                        }
                                        alt=""
                                        style={{
                                            width: "100%",
                                            height: "90%",
                                        }}
                                    />
                                    <p style={{ textAlign: "center" }}>
                                        {book.volumeInfo.title}
                                    </p>
                                </div>
                            );
                        })}

                        {holmesBooks.map((book) => {
                            return (
                                <div
                                    style={{
                                        width: "15vw",
                                        height: "20vw",
                                    }}
                                    id={book.id}
                                    onClick={() => {
                                        setClicked(book);
                                        newPage();
                                    }}>
                                    <img
                                        src={
                                            book.volumeInfo.imageLinks.thumbnail
                                        }
                                        alt=""
                                        style={{
                                            width: "100%",
                                            height: "90%",
                                        }}
                                    />
                                    <p style={{ textAlign: "center" }}>
                                        {book.volumeInfo.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FirstPage;

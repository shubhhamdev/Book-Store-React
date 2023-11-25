import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../Auth/auth";

const Clicked = ({ value }) => {
    // console.log(value.clicked);
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
            {value.clicked && (
                <section style={{ display: "flex", padding: "20px" }}>
                    <div>
                        <img
                            src={value.clicked.volumeInfo.imageLinks.thumbnail}
                            alt=""
                            style={{
                                width: "20vw",
                                height: "30vw",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            background: "grey",
                            padding: "10px",
                            width: "100%",
                        }}>
                        <h1>Title: {value.clicked.volumeInfo.title}</h1>
                        <h2>
                            Authors:{" "}
                            {value.clicked.volumeInfo.authors.join(", ")}
                        </h2>
                        <h2>Category: {value.clicked.volumeInfo.categories}</h2>
                        <h2>Publisher: {value.clicked.volumeInfo.publisher}</h2>
                        <h2>
                            publishedDate :{" "}
                            {value.clicked.volumeInfo.publishedDate}
                        </h2>
                        <h2>
                            Rating Count :{" "}
                            {value.clicked.volumeInfo.ratingsCount}
                        </h2>
                        <h2>
                            Page Count : {value.clicked.volumeInfo.pageCount}
                        </h2>
                        <h2>
                            Average Rating :{" "}
                            {value.clicked.volumeInfo.averageRating}
                        </h2>
                        <p>
                            Description : {value.clicked.volumeInfo.description}
                        </p>
                    </div>
                </section>
            )}

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
                                        value.setClicked(book);
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
                                        value.setClicked(book);
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

export default Clicked;

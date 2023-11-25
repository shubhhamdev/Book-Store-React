import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShowData = ({ bookData }) => {
    const navigate = useNavigate();

    useEffect(() => {
        function check() {
            if (bookData === null) {
                navigate("/");
            }
        }

        check();
    });

    return (
        <div>
            {bookData !== null && (
                <section style={{ display: "flex", padding: "20px" }}>
                    <div>
                        <img
                            src={bookData.volumeInfo.imageLinks.thumbnail}
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
                        <h1>Title: {bookData.volumeInfo.title}</h1>
                        <h2>
                            Authors: {bookData.volumeInfo.authors.join(", ")}
                        </h2>
                        <h2>Category: {bookData.volumeInfo.categories}</h2>
                        <h2>Publisher: {bookData.volumeInfo.publisher}</h2>
                        <h2>
                            publishedDate : {bookData.volumeInfo.publishedDate}
                        </h2>
                        <h2>
                            Rating Count : {bookData.volumeInfo.ratingsCount}
                        </h2>
                        <h2>Page Count : {bookData.volumeInfo.pageCount}</h2>
                        <h2>
                            Average Rating : {bookData.volumeInfo.averageRating}
                        </h2>
                        <p>Description : {bookData.volumeInfo.description}</p>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ShowData;

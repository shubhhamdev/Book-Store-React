import React from "react";
import { useNavigate } from "react-router-dom";

const Find = ({ value, setBookData }) => {
    const navigate = useNavigate();

    function showData() {
        navigate("/showData");
    }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
                marginTop: "20px",
                padding: "20px",
            }}>
            {value.map((book) => {
                return (
                    <div
                        style={{
                            width: "15vw",
                            height: "20vw",
                        }}
                        id={book.id}
                        onClick={() => {
                            setBookData(book);
                            showData();
                        }}>
                        <img
                            src={book.volumeInfo.imageLinks.thumbnail}
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
    );
};

export default Find;

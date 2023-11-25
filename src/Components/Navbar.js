import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Circle from "../Assets/IMG20210528181544.svg";
import KeazoNBOOKS from "../Assets/KeazoNBOOKS.svg";
import Standard from "../Assets/Standard.svg";
import Search from "../Assets/ant-design_search-outlined.svg";
import Book from "../Assets/bx_bx-book-heart.svg";
import Diamond from "../Assets/fluent_premium-person-20-regular.svg";
import Bell from "../Assets/ic_round-notifications-none.svg";

const Navbar = ({ searchValue, setSearchValue, setBooks }) => {
    const navigate = useNavigate();

    function newPage() {
        axios
            .get("https://www.googleapis.com/books/v1/volumes", {
                params: {
                    q: searchValue,
                },
            })
            .then((response) => setBooks(response.data.items))
            .catch((err) => console.log(err));
        navigate("/find");
    }

    return (
        <div>
            <nav className="navbar">
                <div
                    className="left"
                    onClick={() => {
                        navigate("/");
                    }}>
                    <img src={Standard} alt="" />
                    <img src={KeazoNBOOKS} alt="" />
                </div>
                <div className="middle">
                    <div className="search-bar">
                        <img src={Search} alt="" />
                        <input
                            type="search"
                            placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Potter and many more..."
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                            }}
                        />
                    </div>
                    <button onClick={newPage}>Search</button>
                </div>
                <div className="right">
                    <img src={Book} alt="" />
                    <img src={Diamond} alt="" />
                    <img src={Bell} alt="" />
                    <img src={Circle} alt="" />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

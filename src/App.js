import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Clicked from "./Components/Clicked";
import Find from "./Components/Find";
import FirstPage from "./Components/FirstPage.js";
import Navbar from "./Components/Navbar";
import ShowData from "./Components/ShowData";

const App = () => {
    const [clicked, setClicked] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [books, setBooks] = useState([]);
    const [bookData, setBookData] = useState(null);

    return (
        <div>
            <Navbar
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                setBooks={setBooks}
            />
            <Routes>
                <Route
                    path="/"
                    element={<FirstPage setClicked={setClicked} />}
                />
                <Route
                    path="/clicked"
                    element={<Clicked value={{ clicked, setClicked }} />}
                />
                <Route
                    path="/find"
                    element={<Find value={books} setBookData={setBookData} />}
                />

                <Route
                    path="/showData"
                    element={<ShowData bookData={bookData} />}
                />
            </Routes>
        </div>
    );
};

export default App;
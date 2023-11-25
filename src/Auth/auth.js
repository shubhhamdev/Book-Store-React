import axios from "axios";

const auth = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
});

export default auth;
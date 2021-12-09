import axios from "axios";
// Axios is a very godd library when making server requests

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", //whenever the server will make the request, this will help append the request to the common part of the URL all the time.
  //
});

export default instance; // It will let us use the above code outside the file.

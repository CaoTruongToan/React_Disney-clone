import axios from "axios";

// const movieBaseUrl = "https://movienew.cybersoft.edu.vn/api/QuanLyPhim";
// const api_Key = 'GP01';

// const getTrendingVideos = () => {
//     return axios.get(`${movieBaseUrl}/LayDanhSachPhim?maNhom=${api_Key}`,{headers:{
//         TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMiIsIkhldEhhblN0cmluZyI6IjA4LzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNjI5NDQwMDAwMCIsIm5iZiI6MTcxMjk0MTIwMCwiZXhwIjoxNzM2NDQyMDAwfQ.dTEJFBH9VnWoG3lE6KU86OTAeY78oRLVFwIiQgbKkCM"
//     }});
// };

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '2ec0d66f5bdf1dd12eefa0723f1479cf'

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
const getMovieByGenreId = (id) =>
    axios.get(movieByGenreBaseURL + "&with_genres=" + id)



export default {
    getTrendingVideos,
    getMovieByGenreId
}
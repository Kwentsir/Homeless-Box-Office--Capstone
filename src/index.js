import "./style.css";

// const involveapi = 'yVTwDpeZ7FtqX6HWOiZh';

const fetchData = async () => {
  await fetch("https://api.tvmaze.com/shows")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

fetchData();

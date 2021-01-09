import React, { useState } from "react";
import "./styles.css";
import logo from "./logo.svg";

const musicDB = {
  Hindustani: {
    "Bhimsen Joshi": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Kishori Amonkar": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Pandit Jasraj": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Ravi shankar": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Bade Ghulam Ali Khan": [
      "Aaj So Bana Bahut Din",
      "Ab Mil Aaye Apne Piya Ko"
    ],
    "Girija Devi": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"]
  },
  Thumri: {
    "Girija Devi": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Begum Akhtar": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Rasoolan Bai": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Sobha Gurtu": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Bhimsen Joshi": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"]
  },
  Gazal: {
    "Mehdi Hassan": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Jagjit Singh": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Ghulam Ali": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    Hariharan: ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Pankaj Udhas": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"]
  },
  Qawali: {
    "Nusrat Fateh Ali kHan": [
      "Aaj So Bana Bahut Din",
      "Ab Mil Aaye Apne Piya Ko"
    ],
    "Rahat Fateh Ali Khan": [
      "Aaj So Bana Bahut Din",
      "Ab Mil Aaye Apne Piya Ko"
    ],
    "Abida Parveen": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"]
  },
  Folk: {
    "Purna Das Baul": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Kartik Das Baul": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Iman Chakraborty": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"]
  },
  Khyal: {
    "Bhimsen Joshi": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Amir Khan": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Aswini Bhide Despande": [
      "Aaj So Bana Bahut Din",
      "Ab Mil Aaye Apne Piya Ko"
    ],
    "Koushiki Chakraborty": [
      "Aaj So Bana Bahut Din",
      "Ab Mil Aaye Apne Piya Ko"
    ]
  },
  Rabindra: {
    "Hemanta Kumar": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Srikanto Acharya": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Debabrata Biswas": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    Shaan: ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"]
  },
  Najrul: {
    "Manabendra Mukherjee": [
      "Aaj So Bana Bahut Din",
      "Ab Mil Aaye Apne Piya Ko"
    ],
    "Mohd Rafi": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Firoja Begum": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"],
    "Rupankar Bagchi": ["Aaj So Bana Bahut Din", "Ab Mil Aaye Apne Piya Ko"]
  }
};
const genres = Object.keys(musicDB);
const songLink = {
  "Aaj So Bana Bahut Din":
    "https://gaana.com/song/aaj-sobana-bahut-din-beete-1",
  "Ab Mil Aaye Apne Piya Ko": "https://gaana.com/song/ab-mil-aaye-apne-piya-ke"
};
export default function App() {
  var [singerList, setSingerList] = useState([]);
  var [singerObject, setSingerObject] = useState({});
  var [songList, setSongList] = useState([]);
  function showSingerList(genre) {
    const singerObject = musicDB[genre];
    console.log(singerObject);
    setSingerObject(singerObject);
    const singerList = Object.keys(singerObject);
    console.log(singerList);
    setSingerList(singerList);
    document.getElementsByClassName("songs")[0].classList.add("hide");
    document.getElementsByClassName("singers")[0].classList.remove("hide");
  }
  function showSongList(singer) {
    var songList = singerObject[singer];
    console.log(songList);
    setSongList(songList);
    document.getElementsByClassName("singers")[0].classList.add("hide");
    document.getElementsByClassName("songs")[0].classList.remove("hide");
  }
  function playSong(song) {
    window.open(songLink[song]);
  }
  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="logo" />
        <div>Sangeet World</div>
        <nav>
          {genres.map((genre) => {
            return (
              <button key={genre} onClick={() => showSingerList(genre)}>
                {genre}
              </button>
            );
          })}
        </nav>
      </div>
      <section className="container-center container">
        <ul className="singers non-bullet">
          {singerList.map((singer, i) => {
            if (i % 2 === 0) {
              return (
                <li onClick={() => showSongList(singer)} className="list">
                  {singer}
                </li>
              );
            } else {
              return (
                <li onClick={() => showSongList(singer)} className="list ow">
                  {singer}
                </li>
              );
            }
          })}
        </ul>
        <ul className="songs non-bullet">
          {songList.map((song, i) => {
            if (i % 2 === 0) {
              return (
                <li onClick={() => playSong(song)} className="list">
                  {song}
                </li>
              );
            } else {
              return (
                <li onClick={() => playSong(song)} className="list ow">
                  {song}
                </li>
              );
            }
          })}
        </ul>
      </section>
    </div>
  );
}

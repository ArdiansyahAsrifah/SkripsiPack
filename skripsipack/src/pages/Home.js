import React from 'react';
import Card from '../components/Card';
import Accordion from '../components/Accordion';
import Timeline from '../components/Timeline';
import nadyaImage from '../images/nadya.jpg';
import juicyImage from '../images/juicy.jpg';
import nassarImage from '../images/nassar.jpg';
import realityImage from '../images/realityclub.jpg';
import BrunoImage from '../images/brunomars.jpg';
import TaylorImage from '../images/taylor.jpg';

const Home = () => {
  const playlists = [
    {
      title: 'Cup of Nadya’s Lofi ☕',
      link: 'https://open.spotify.com/playlist/5NnOQFD3i0N3cZbo1ILJkH?si=31moctBLRgKi6MFsho4VUQ',
      image: nadyaImage
    },
    {
      title: 'Luicy Love Notes 💖',
      link: 'https://open.spotify.com/playlist/7igcxNG9Lvg7UmLIupoMDa?si=e1138458b7784a26',
      image: juicyImage
    },
    {
      title: 'Karaoke King Nassar 🎤',
      link: 'https://open.spotify.com/playlist/07xeFKIeKaZZlwwgmkojHR?si=82a7deca90b4497d',
      image: nassarImage
    },
    {
      title: 'Dreamy Days Reality🌼',
      link: 'https://open.spotify.com/playlist/xyz',
      image: realityImage
    },
    {
      title: 'Funky Vibes Bruno 🌟',
      link: 'https://open.spotify.com/playlist/xyz',
      image: BrunoImage
    },
    {
      title: 'Swiftie Diaries 📖',
      link: 'https://open.spotify.com/playlist/xyz',
      image: TaylorImage
    }
  ];

  return (
    <div>
      <h2>Selamat Datang di SkripsiPack!</h2>
      <div className="card-container">
        {playlists.map((playlist, index) => (
          <Card key={index} {...playlist} />
        ))}
      </div>

        {/* Pembatas antara Card Playlist dan Accordion */}
      <Timeline/>
      {/* Menambahkan Accordion untuk Skripsi Resources */}
      <Accordion />
    </div>
  );
};

export default Home;

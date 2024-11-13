import React from 'react';
import Card from '../components/Card';
import Dropdown from '../components/Dropdown';

const Home = () => {
  const playlists = [
    {
      title: 'Lofi Beats',
      link: 'https://open.spotify.com/playlist/xyz',
      image: 'https://i.scdn.co/image/abc'
    },
    {
      title: 'Focus Music',
      link: 'https://open.spotify.com/playlist/xyz',
      image: 'https://i.scdn.co/image/def'
    },
    {
        title: 'Focus Music',
        link: 'https://open.spotify.com/playlist/xyz',
        image: 'https://i.scdn.co/image/def'
    },
    {
        title: 'Focus Music',
        link: 'https://open.spotify.com/playlist/xyz',
        image: 'https://i.scdn.co/image/def'
    },
    {
        title: 'Focus Music',
        link: 'https://open.spotify.com/playlist/xyz',
        image: 'https://i.scdn.co/image/def'
    },
    {
        title: 'Focus Music',
        link: 'https://open.spotify.com/playlist/xyz',
        image: 'https://i.scdn.co/image/def'
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
      <Dropdown />
    </div>
  );
};

export default Home;

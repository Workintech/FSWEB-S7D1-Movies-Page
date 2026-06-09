import React from 'react';
import { useHistory } from 'react-router-dom';

export default function KaydedilenlerListesi(props) {
  const history = useHistory();
  function toMainPage() {
    history.push('/');
  }
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie, index) => (
        <span key={index} className="saved-movie">
          {movie.title}
        </span>
      ))}
      {/* Görev 4: Anasayfa butonu ana sayfayı açmalı */}
      <div onClick={toMainPage} className="home-button">
        Anasayfa
      </div>
    </div>
  );
}

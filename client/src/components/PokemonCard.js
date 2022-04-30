import React from 'react';
import { Link } from 'react-router-dom';

function PokemonCard({ id, image, name, type }) {
  const style = type + " thumb-container";
  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h5>{name.toUpperCase()}</h5>
      </div>
      <button className="btn btn-info"><Link to={`/pokemon/${name}`} className="text-decoration-none fs-6 fw-bolder text-dark">Detail</Link></button>
    </div>
  )
}

export default PokemonCard;
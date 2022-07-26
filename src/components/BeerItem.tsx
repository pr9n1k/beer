import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Beer } from "../types/Beer";

export interface BeerItemProps {
  beer: Beer;
}

export function BeerItem({ beer }: BeerItemProps) {
  const navigate = useNavigate();
  const onClick = () => navigate(`/beer/${beer.id}`);
  return (
    <li className="beer__item" onClick={onClick}>
      <div className="beer__item-img">
        <img src={beer.image_url} alt="images" />
      </div>
      <p className="beer__item-title">
        <span className="beer__category">Name:</span> {beer.name}
      </p>
      <div className="beer__item-text">
        <span className="beer__category">Description:</span>{" "}
        <p>{beer.description}</p>
      </div>
    </li>
  );
}

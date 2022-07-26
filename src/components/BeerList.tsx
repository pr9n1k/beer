import * as React from "react";
import { Beer } from "../types/Beer";
import { BeerItem } from "./BeerItem";

export interface BeerListProps {
  beers?: Beer[];
}

export function BeerList({ beers }: BeerListProps) {
  return (
    <div>
      <ul className="beer__list">
        {beers?.map((item) => {
          return <BeerItem beer={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
}

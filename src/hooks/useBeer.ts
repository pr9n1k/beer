import React from "react";
import { Beer } from "../types/Beer";

const useBeer = function (beers: Beer[], query: string) {
  const searchBeer = React.useMemo(() => {
    return beers.filter((beer) =>
      beer.name.toLocaleLowerCase().includes(query)
    );
  }, [beers, query]);
  return searchBeer;
};

export default useBeer;

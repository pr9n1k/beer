import * as React from "react";
import { BeerList } from "../components/BeerList";
import { Pagination } from "../components/Pagination";
import Input from "../components/UI/Input";
import useBeer from "../hooks/useBeer";
import { Beer } from "../types/Beer";
import { useFetching } from "./../hooks/useFetching";

export function Home() {
  const [beer, setBeer] = React.useState<Beer[]>([]);
  const [query, setQuery] = React.useState<string>("");
  const [currentItems, setCurrentItems] = React.useState<Beer[]>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const data = useFetching();
  const searchBeer = useBeer(beer, query);

  React.useEffect(() => {
    setIsLoading(true);
    data.then((res) => {
      setBeer(res);
      setIsLoading(false);
    });
  }, []);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }
  return beer.length ? (
    <>
      <Input
        type="text"
        onChange={onChange}
        value={query}
        className="beer__search"
        placeholder="Поиск..."
      />
      <BeerList beers={currentItems} />
      <Pagination beers={searchBeer} setCurrentItems={setCurrentItems} />
    </>
  ) : (
    <h1>Произошла ошибка...</h1>
  );
}

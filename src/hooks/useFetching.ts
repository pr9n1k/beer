import axios from "axios";
import { Beer } from "../types/Beer";

export const useFetching = async () => {
  const beerArray: Beer[] = [];
  let i: number;
  //Делаем запросы на сервер до тех пор, пока запрос не вернет кол-во элементов < 80
  for (i = 1; ; i++) {
    await axios
      .get(`https://api.punkapi.com/v2/beers?per_page=80&page=${i}`)
      .then((res) => {
        const data = res.data;
        beerArray.push(...data);
      })
      .catch((e) => e.message);

    if (beerArray.length !== i * 80) {
      break;
    }
  }
  return beerArray;
};

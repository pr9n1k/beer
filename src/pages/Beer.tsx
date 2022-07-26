import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Beer as BeerType } from "../types/Beer";

export function Beer() {
  const [beer, setBeer] = React.useState<BeerType>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  React.useEffect(() => {
    setIsLoading(true);
    axios.get(`https://api.punkapi.com/v2/beers/${id}`).then((res) => {
      const data = res.data[0];
      setBeer(data);
      setIsLoading(false);
    });
  }, [id]);
  const onClick = () => navigate(-1);
  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <div className="beer">
      <span onClick={onClick} className="back">
        Назад
      </span>
      <div className="beer__content">
        <div className="beer__img">
          <img src={beer?.image_url} alt="images" />
        </div>
        <div className="beer__info">
          <h1 className="beer__name">{beer?.name}</h1>
          <p className="beer__tagline">
            <span className="beer__category">Tagline:</span> {beer?.tagline}
          </p>
          <p className="beer__adv">
            <span className="beer__category">ADV:</span> {beer?.abv}
          </p>
          <div>
            <span className="beer__category">Food pairing: </span>
            <ul className="beer__food_pairing-list">
              {beer?.food_pairing.map((item, i) => {
                return (
                  <li key={i}>
                    {i + 1}.{item}
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="beer__description">
            <span className="beer__category">Description:</span>{" "}
            {beer?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

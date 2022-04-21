import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react"


function Cuisine() {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = (name) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.REACT_APP_RAPIDAPI_KEY}`,
      }

    };
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?cuisine=${name}`, options)
      .then(response => response.json())
      .then(response => {

        setCuisine(response.results)
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getCuisine(params.type);

  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 3rem;
`;

const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  h2 {
    text-align: center;
    padding: 1rem;
  }
`;


export default Cuisine;

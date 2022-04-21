import { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);

        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();
    }, [params.name])

    return (
        <>
            <DetailWrapper>
                <div>
                    <h2>{details.title}</h2>
                    <img src={details.image} alt={details.title} />
                </div>
                <Info>
                    <Button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>
                        Ingredients
                    </Button>
                    <Button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>
                        Instructions
                    </Button>

                    {activeTab === "ingredients" && (
                        <ul>
                            {details.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                    )}
                    {activeTab === "instructions" && (
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                        </div>
                    )}

                </Info>
            </DetailWrapper>

        </>
    )
}

const DetailWrapper = styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;

    .active{
        background:linear-gradient(35deg, #494949, #313131);
        color:white;
    }

    h2{
        margin-bottom: 2rem;
    }

    ol{
        margin:2rem;
    }

    ul{
        margin:2rem;
    }

    li{
        font-size:1rem;
        line-height:2rem;
    }

    img {
        border-radius: 1rem;
    }
    
`;

const Button = styled.button`
padding:1rem 2rem;
color:#333;
background: #fff;
border:2px solid #333;
margin-right:2rem;
font-weight:bold;
border-radius: 1rem;

&:hover {
    background-color: #D2D2D2;
}
`;

const Info = styled.div`
margin-left:10rem;

p {
    margin 1rem 0;
    line-height: 1.5rem;
}
`;

export default Recipe;
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCharacter } from "../api";
import { Link } from "react-router-dom";

const Title = styled.div`
  background-color: #617bb6;
  border-right: 5px solid #2b458a;
  border-bottom: 5px solid #2b458a;
  color: #fff;
  padding: 15px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 25px;
  font-family: "Waltograph", sans-serif;
  font-family: "Waltograph UI", sans-serif;
`;
const CharacterList = styled.ul`
  overflow-y: auto;
  height: 100%;
  width: 80%;
  margin: auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
const Character = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  &:hover {
    border-right: 5px solid #8d8e95;
    border-bottom: 5px solid #8d8e95;
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
  }
`;
const ImgClip = styled.div`
  height: 80%;
  width: 200px;
  border-radius: 50%;
  overflow: hidden;
`;

interface ICharacters {
  id: number;
  name: string;
  imageUrl: string;
}

function Home() {
  const { isLoading, data } = useQuery<ICharacters[]>(
    "characters",
    fetchCharacter
  );

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Title>Characters</Title>
          <CharacterList>
            {data?.slice(0, 100).map((character) => (
              <Link to={`characters/${character.id}`} key={character.id}>
                <Character>
                  <ImgClip>
                    <img src={character.imageUrl} alt={character.name} />
                  </ImgClip>
                  <p>{character.name}</p>
                </Character>
              </Link>
            ))}
          </CharacterList>
        </>
      )}
    </>
  );
}
export default Home;

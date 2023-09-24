import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCharacterDetail } from "../api";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CharacterContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;
const CharacterImg = styled.img`
  width: 250px;
`;
const CharacterName = styled.h2`
  font-family: "Waltograph", sans-serif;
  font-family: "Waltograph UI", sans-serif;
  font-size: 30px;
  padding: 10px;
`;
const Films = styled.ul`
  background-color: #fff;
  width: 100%;
  padding: 15px;
  border-top: 3px solid #000;
  border-left: 3px solid #000;
`;
const Film = styled.li`
  font-size: 17px;
  text-align: center;
`;
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;
const Button = styled.div`
  background-color: #617bb6;
  border-right: 3px solid #2b458a;
  border-bottom: 3px solid #2b458a;
  color: #fff;
  padding: 10px;
`;

interface ICharacter {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

function Detail() {
  const { characterId } = useParams();
  const { isLoading, data } = useQuery<ICharacter>(
    ["character", characterId],
    () => fetchCharacterDetail(characterId)
  );

  return (
    <CharacterContainer>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Container>
          <CharacterImg src={data?.imageUrl} />
          <CharacterName>{data?.name}</CharacterName>
          <Films>
            {data?.films.map((film, index) => (
              <Film key={index}>{film}</Film>
            ))}
          </Films>
          <ButtonBox>
            <Button>
              <Link to="/">◀ Back</Link>
            </Button>
            <Button>
              <a href={data?.sourceUrl}>More ▶</a>
            </Button>
          </ButtonBox>
        </Container>
      )}
    </CharacterContainer>
  );
}
export default Detail;

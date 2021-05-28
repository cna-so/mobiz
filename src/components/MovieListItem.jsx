import React from "react";
import styled from "styled-components";
import { TiStarHalfOutline } from "react-icons/ti";

const MovieListItem = ({ title, date, image, rating, onTouch }) => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <Container>
      <div>
        <img src={image} alt=""  />
      </div>
      <h3>{truncate(title, 19)}</h3>
      <Content>
        <h4>{date.getFullYear()}</h4>
        <p>
          {rating} <TiStarHalfOutline />{" "}
        </p>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 1rem;
  /* width: calc(100vw / 6 - 20px); */
  & > {
  }
  img {
    width: 200px;
    margin-left: 0.6rem;
    cursor: pointer;
    object-fit: contain;
    transition: transform 0.4s;
    border-radius: 10px;
    &:hover {
      transform: scale(1.1);
    }
  }
  h4 {
    color: gray;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50px;
    svg {
      color: yellow;
    }
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 0.5rem;
`;
export default MovieListItem;

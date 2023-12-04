import React from "react";
import { ItemContainer } from "./styled";

const ItemRepo = ({ repo, removeRepo }) => {
  const remove = () => {
    removeRepo(repo.id);
  };

  return (
    <ItemContainer onClick={remove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        Ver Repositório
      </a>
      <br />
      <a href="#" className="remove">
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
};

export default ItemRepo;

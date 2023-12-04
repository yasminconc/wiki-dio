import React from "react";
import gitLogo from "../Assets/github.png";
import { Container } from "./styles";
import Input from "../Components/Input/Input";
import ItemRepo from "../Components/ItemRepo/ItemRepo";
import Button from "../Components/Button/Button";
import { api } from "../Services/api";

function App() {
  const [currentRepo, setCurrentRepo] = React.useState("");
  const [repos, setRepos] = React.useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const Exist = repos.find((repo) => repo.id === data.id);

        if (!Exist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo("");
          return;
        }
      }
      alert("Repositório não encontrado");
    } catch (error) {
      console.error("Erro ao buscar repositório:", error.message);
    }
  };

  const removeRepo = (id) => {
    const remove = repos.filter((usuario) => usuario.id !== id);
    setRepos(remove);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="gitlogo" />

      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />

      <Button onClick={handleSearchRepo} />

      {repos.map((repo) => (
        <ItemRepo repo={repo} removeRepo={removeRepo} />
      ))}
    </Container>
  );
}

export default App;

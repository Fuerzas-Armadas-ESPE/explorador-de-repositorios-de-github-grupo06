import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  AppBar,
  Toolbar,
} from "@mui/material";
import RepoList from "./components/RepoList";
import imagelogo from "./img/logo.png";

function App() {
  const [username, setUsername] = useState("");
  const [showRepoList, setShowRepoList] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowRepoList(true);
  };

  // Función para manejar el inicio de sesión con GitHub
  const handleLoginWithGitHub = () => {
    // Redirigir al usuario a la página de inicio de sesión de GitHub
    window.location.href = `https://github.com/login/oauth/authorize?client_id=f442980491f099739639&redirect_uri=http://localhost:5173/callback&scope=user`;
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div style={{ marginRight: '10px' }}>
            <img src={imagelogo} alt="Logo" height="50" />
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi Explorador de Repositorios
          </Typography>
          <Button variant="contained" onClick={handleLoginWithGitHub}>Iniciar sesión con GitHub</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ marginTop: "20px" }}>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="Nombre de Usuario"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            fullWidth
            sx={{ marginBottom: "10px" }}
          />
          <Button type="submit" variant="contained" fullWidth>
            Buscar Repositorios
          </Button>
        </form>
        {showRepoList && <RepoList username={username} />}
      </Container>
    </div>
  );
}

export default App;

import { Button, TextField, Stack, Skeleton } from "@mui/material";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <Stack spacing={2} direction="column">
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          type="email"
        />
        <TextField
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          type="password"
        />
        <Button
          variant="contained"
          color="primary"
          
          onClick={() => alert("Olá mundo!")}
        >
          Logar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => alert("Olá mundo!")}
        >
          Cancelar
        </Button>
        <Skeleton variant="rectangular" width={210} height={118} />
      </Stack>
    </div>
  );
}

export default App;

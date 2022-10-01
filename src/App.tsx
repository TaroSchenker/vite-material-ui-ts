import "./App.css";
import { Button } from "@mui/material";
import "twin.macro";

function App() {
  return (
    <div>
      {/* customizing MUI Buttons */}
      <div className="flex flex-col w-64 gap-y-6">
        <Button variant="contained" color="primary">
          Contained
        </Button>
        <Button variant="outlined" color="secondary">
          Outlined
        </Button>
        <Button variant="outlined">Outlined</Button>
      </div>


{/* using tw directly */}
      <div className="my-6">
        <input
          placeholder="text here"
          tw="border border-primary hover:border-secondary"
        />
      </div>
    </div>
  );
}

export default App;

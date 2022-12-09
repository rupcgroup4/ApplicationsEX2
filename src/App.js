import { AppBar, Avatar, Box } from '@mui/material';
import MyKitchen from './components/MyKitchen';

function App() {
  return (
    <Box>
      <AppBar>
        <Avatar src='mykitchen.png' variant='square' />
      </AppBar>
      <MyKitchen />
    </Box>
  );
}

export default App;

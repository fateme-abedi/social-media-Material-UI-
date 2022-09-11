import { Box, createTheme, ThemeProvider } from '@mui/material';
// import Button from '@mui/material/Button';
import { Stack } from '@mui/system'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Rightbar from './Components/Rightbar'
import Navbar from './Components/Navbar'
import AddPost from './Components/AddPost'
import React,{useState} from 'react'

function App() {
const [mode,setMode]=useState('dark');

  const darkTheme=createTheme({
    palette:{
     mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
     
    
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction='row' spacing={2} justifyContent={'space-between'}>
        <Sidebar setMode={setMode} mode={mode}/>
        
        <Feed/>
        <Rightbar/>
      </Stack>
     <AddPost/>
    </Box>
    </ThemeProvider>
  );
}

export default App;

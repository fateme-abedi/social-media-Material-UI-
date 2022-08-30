import { Box } from '@mui/material'
import Post from './Post'
import React from 'react'
import img1 from '../assets/card2.jpeg'
import img2 from '../assets/card3.jpeg'
import img3 from '../assets/card4.jpeg'
import img4 from '../assets/card5.jpeg'
import img5 from '../assets/card6.jpeg'
import img6 from '../assets/card7.jpeg'
function Feed(props) {
  return (
    <Box flex={4} p={2}>
      <Post title="lili" img={img1} />
      <Post title="John" img={img2} />
      <Post title="pari" img={img3} />
      <Post title="Sara" img={img4} />
      <Post title="Ted" img={img5} />
      <Post title="Max" img={img6} />
    </Box>
  )
}

export default Feed

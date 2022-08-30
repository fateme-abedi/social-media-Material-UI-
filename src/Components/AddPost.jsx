import {
  Box,
  Fab,
  Modal,
  Tooltip,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import ImageIcon from '@mui/icons-material/Image'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import DateRangeIcon from '@mui/icons-material/DateRange'

import React, { useState } from 'react'
import { Add } from '@mui/icons-material'
import img from '../assets/i.jpeg'
const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const UserBox = styled('Box')(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  marginTop: '3.5px',
  marginBottom: '5px',
}))

function AddPost(props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        position="fixed"
        sx={{
          position: 'fixed',
          bottom: 17,
          left: { xs: 'calc(45% )', md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={250}
          bgcolor={'background.default'}
          color={'text.primary'}
          borderRadius={6}
          p={3}
        >
          <Typography variant="h6" color="#777" textAlign="center">
            Create new post
          </Typography>
          <UserBox>
            <Avatar width="30" height="30" src={img} />
            <Typography variant="h6">Jenni</Typography>
          </UserBox>

          <TextField
            id="standard-multiline-static"
            sx={{ width: '100%', marginTop: '2' }}
            multiline
            rows={3}
            placeholder="What's on ypu mind?"
            variant="standard"
          />

          <Stack mt={2} mb={2} direction="row" gap={2}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="success" />
            <VideoCameraBackIcon color="secondary" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default AddPost

import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material'
import { Group, Mail, Notifications } from '@mui/icons-material'

import img from '../assets/i.jpeg'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')((theme) => ({
  backgroundColor: 'white',
  padding: '1px 10px',
  borderRadius: '10px',
  width: '40%',
}))

const Icons = styled('div')(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}))

const UserBox = styled('Box')(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))

function Navbar(props) {
  const [open, setOpen] = useState(false)
  return (
    <AppBar bgcolor={'pink'} position={'sticky'}>
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        >
          Social
        </Typography>
        <Group
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
            },
          }}
        />
        <Search color={'text.primary'}>
          <InputBase placeholder={'Search...'}></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="white" />
          </Badge>

          <Badge badgeContent={4} color="error">
            <Notifications color="white" />
          </Badge>

          <Avatar
            width="30"
            height="30"
            src={img}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar width="30" height="30" src={img} />
          <Typography variant="h6">Jenni</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar

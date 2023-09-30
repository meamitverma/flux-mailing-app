import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { gmailLogo} from '../constants/constant'

const StyledAppBar = styled(AppBar)({
    background: '#111111',
    boxShadow: 'none'
})

const Header = () => {
  return (
    <StyledAppBar position='static'>
        <Toolbar>
            <MenuIcon color='#e6e6e6'/>
            <img src={gmailLogo} alt="logo" style={{marginLeft:15}} />
        </Toolbar>
    </StyledAppBar>
  )
}

export default Header
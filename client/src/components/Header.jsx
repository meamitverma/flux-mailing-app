import React from 'react'
import { AppBar, Box, InputBase, Toolbar, styled } from '@mui/material'
import { AccountCircle, AppsOutlined, HelpOutline, Menu as MenuIcon, Search, SettingsOutlined, Tune } from '@mui/icons-material'
import { gmailLogo} from '../constants/constant'

const StyledAppBar = styled(AppBar)({
    background: '#111111',
    boxShadow: 'none' 
})

const SearchWrapper = styled(Box)({
    background: '#ffffff',
    marginLeft: 80,
    borderRadius: 60,
    minWidth: 690,
    maxWidth: 720,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    '& > div' : {
        width: '100%',
        padding: '0 10px'
    }
})

const OptionWrapper = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: end;
    & > svg {
        margin-left: 20px;
    }
`

const Header = () => {
  return (
    <StyledAppBar position='static'>
        <Toolbar>
            <MenuIcon color='#e6e6e6'/>
            <img src={gmailLogo} alt="logo" style={{marginLeft:15}} />
            <SearchWrapper>
                <Search color='action'/>
                <InputBase placeholder='Search Mail'/>
                <Tune color='action'/>
            </SearchWrapper>
            <OptionWrapper>
                <HelpOutline color='#e6e6e6'/>
                <SettingsOutlined color='#e6e6e6'/>
                <AppsOutlined color='#e6e6e6' />
                <AccountCircle color='#e6e6e6'/>
            </OptionWrapper>
        </Toolbar>
    </StyledAppBar>
  )
}

export default Header
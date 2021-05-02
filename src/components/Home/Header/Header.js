import React from 'react'
import NavBar from '../../Share/NavBar/NavBar'
import MainHeader from './MainHeader'

function Header() {
    return (
        <div style={{height:'100vh'}}>
            <NavBar></NavBar>
            <MainHeader></MainHeader>
        </div>
    )
}

export default Header

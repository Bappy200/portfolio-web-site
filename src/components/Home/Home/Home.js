import React from 'react'
import Footer from '../../Share/Footer/Footer'
import About from '../About/About'
import Blog from '../Blog/Blog'
import Contuct from '../Contuct/Contuct'
import Header from '../Header/Header'
import Project from '../Project/Project'

export default function Home() {
    return (
        <>
            <Header></Header>
            <About></About>
            <Project></Project>
            <Blog></Blog>
            <Contuct></Contuct>
            <Footer></Footer>
        </>
    )
}

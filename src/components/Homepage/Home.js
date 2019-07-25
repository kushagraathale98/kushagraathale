import React, { Component } from 'react'
import Header from './Header'
import DevName from './DevName'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Projects from './Projects'
import Footer from './Footer'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <DevName/>
                <AboutMe/>
                <Portfolio/>
                <Projects/>
                <Footer/>
            </div>
        )
    }
}

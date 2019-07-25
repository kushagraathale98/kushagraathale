import React, { Component } from 'react'
import Header from '../Homepage/Header'
import AboutMe from '../Homepage/AboutMe'

import Experience from './Experience'
import Skills from './Skills'
import Education from './Education'
import Footer from '../Homepage/Footer'
export default class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <AboutMe/>
               
                <Experience/>
                <Skills/>
                <Education/>
                <Footer/>
            </div>
        )
    }
}

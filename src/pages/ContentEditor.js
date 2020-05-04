import React, { Component } from 'react'
import Editor from '../components/Editor'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

// import Content from '../src/components/Content'

export default class ContentEditor extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Editor />
                <Footer />
            </div>
        );
    }
}
import React, { Component } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Dashboard from '../components/Dashboard'

export default class ContentDashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Dashboard />
                <Footer />
            </div>
        );
    }
}
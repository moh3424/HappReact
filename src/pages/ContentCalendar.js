import React, { Component } from 'react'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Calendar from '../components/Calendar'

export default class ContentCalendar extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Calendar />
                <Footer />
            </div>
        );
    }
}
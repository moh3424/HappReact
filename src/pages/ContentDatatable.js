import React, { Component } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import DataTable from '../components/DataTable'

export default class ContentDatatable extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <DataTable />
                <Footer />
            </div>
        );
    }
}
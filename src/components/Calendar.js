
import React, { Component } from 'react'

export default class Calendar extends Component {
    componentDidMount() {
        const script = document.createElement("script")
        script.src = 'js/calendar.js'
        script.async = true
        document.body.appendChild(script)

    }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                            Calendar
      <small>Control panel</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="feker_url"><i className="fa fa-dashboard" /> Home</a></li>
                            <li className="active">Calendar</li>
                        </ol>
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="box box-solid">
                                    <div className="box-header with-border">
                                        <h4 className="box-title">Draggable Events</h4>
                                    </div>
                                    <div className="box-body">
                                        {/* the events */}
                                        <div id="external-events">
                                            <div className="external-event bg-green">Lunch</div>
                                            <div className="external-event bg-yellow">Go home</div>
                                            <div className="external-event bg-aqua">Do homework</div>
                                            <div className="external-event bg-light-blue">Work on UI design</div>
                                            <div className="external-event bg-red">Sleep tight</div>
                                            <div className="checkbox">
                                                <label htmlFor="drop-remove">
                                                    <input type="checkbox" id="drop-remove" />
                  remove after drop
                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /. box */}
                                <div className="box box-solid">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Create Event</h3>
                                    </div>
                                    <div className="box-body">
                                        <div className="btn-group" style={{ width: '100%', marginBottom: 10 }}>
                                            {/*<button type="button" id="color-chooser-btn" class="btn btn-info btn-block dropdown-toggle" data-toggle="dropdown">Color <span class="caret"></span></button>*/}
                                            <ul className="fc-color-picker" id="color-chooser">
                                                <li><a className="text-aqua" href="feker_url"><i className="fa fa-square" /></a></li>
                                                <li><a className="text-blue" href="feker_url"><i className="fa fa-square" /></a></li>
                                                <li><a className="text-light-blue" href="feker_url"><i className="fa fa-square" /></a></li>
                                                <li><a className="text-teal" href="feker_url"><i className="fa fa-square" /></a></li>
                                                <li><a className="text-yellow" href="feker_url"><i className="fa fa-square" /></a></li>
                                                <li><a className="text-orange" href="feker_url"><i className="fa fa-square" /></a></li>
                                                <li><a className="text-green" href="feker_url"><i className="fa fa-square" /></a></li>
                                                <li><a className="text-lime" href="feker_url"><i className="fa fa-square" /></a></li>
                                                <li><a className="text-red" href="feker_url"><i className="fa fa-square" /></a></li>
                                                <li><a className="text-purple" href="feker_url"><i className="fa fa-square" /></a></li>
                                                <li><a className="text-fuchsia" href="feker_url"><i className="fa fa-square" /></a></li>
                                                <li><a className="text-muted" href="feker_url"><i className="fa fa-square" /></a></li>
                                                <li><a className="text-navy" href="feker_url"><i className="fa fa-square" /></a></li>
                                            </ul>
                                        </div>
                                        {/* /btn-group */}
                                        <div className="input-group">
                                            <input id="new-event" type="text" className="form-control" placeholder="Event Title" />
                                            <div className="input-group-btn">
                                                <button id="add-new-event" type="button" className="btn btn-primary btn-flat">Add</button>
                                            </div>
                                            {/* /btn-group */}
                                        </div>
                                        {/* /input-group */}
                                    </div>
                                </div>
                            </div>
                            {/* /.col */}
                            <div className="col-md-9">
                                <div className="box box-primary">
                                    <div className="box-body no-padding">
                                        {/* THE CALENDAR */}
                                        <div id="calendar" />
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /. box */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}


            </div>

        )
    }
}

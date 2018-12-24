import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BookingMovie extends Component {
    render() {
        return (
                    <div className="container">
                        <div className="modal-header">
                            <div>
                                <ul className="nav nav-tabs">
                                    <li className="active">
                                        <a className="tab-item" href="#1" data-toggle="tab"><span
                                            className="f-left tab-day">T5</span> 18/10 <br/>2018</a>
                                    </li>
                                    <li><a className="tab-item" href="#1" data-toggle="tab"><span
                                        className="f-left tab-day">T6</span> 19/10 <br/>2018</a>
                                    </li>
                                    <li><a className="tab-item" href="#2" data-toggle="tab"><span
                                        className="f-left tab-day">T7</span> 20/10 <br/>2018</a>
                                    </li>
                                    <li><a className="tab-item" href="#3" data-toggle="tab"><span
                                        className="f-left tab-day">CN</span> 21/10 <br/>2018</a>
                                    </li>
                                    <li><a className="tab-item" href="#2" data-toggle="tab"><span
                                        className="f-left tab-day">T2</span> 22/10 <br/>2018</a>
                                    </li>
                                    <li><a className="tab-item" href="#3" data-toggle="tab"><span
                                        className="f-left tab-day">T3</span> 23/10 <br/>2018</a>
                                    </li>
                                    <li><a className="tab-item" href="#3" data-toggle="tab"><span
                                        className="f-left tab-day">T4</span> 24/10 <br/>2018</a>
                                    </li>
                                    <li>
                                        <a className="tab-item" href="#1" data-toggle="tab"><span
                                            className="f-left tab-day">T5</span> 25/10 <br/>2018</a>
                                    </li>
                                    <li><a className="tab-item" href="#1" data-toggle="tab"><span
                                        className="f-left tab-day">T6</span> 26/10 <br/>2018</a>
                                    </li>
                                </ul>

                                <div className="tab-content ">
                                    <div className="tab-pane active" id="1">
                                        <h3>Không có dữ liệu tại ngày này</h3>
                                    </div>
                                    <div className="tab-pane" id="2">
                                        <div className="mg-top-20">
                                            <ul className="nav nav-tabs tab-fix">
                                                <li className="tab-item-in"><a href="#tab_in1_1" data-toggle="tab">UIT
                                                    CINEMA BÌNH DƯƠNG</a>
                                                </li>
                                                <li className="tab-item-in"><a href="#tab_in1_2" data-toggle="tab">UIT
                                                    CINEMA THỦ ĐỨC</a>
                                                </li>
                                                <li className="tab-item-in"><a href="#tab_in1_1" data-toggle="tab">UIT
                                                    CINEMA BÌNH THẠNH</a>
                                                </li>
                                            </ul>

                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab_in1_1">
                                                    <div className=" mg-top-20">
                                                        <hr/>
                                                        <ul className="nav nav-tabs tab-fix">
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">17:00</a>
                                                            </li>
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">19:30</a>
                                                            </li>
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">21:30</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab_in1_2">
                                                    <div className=" mg-top-20">
                                                        <hr/>
                                                        <ul className="nav nav-tabs tab-fix">
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">17:00</a>
                                                            </li>
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">19:30</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="3">
                                        <div className=" mg-top-20">
                                            <ul className="nav nav-tabs tab-fix">
                                                <li className="tab-item-in"><a href="#tab_in_1" data-toggle="tab">UIT CINEMA
                                                    BÌNH DƯƠNG</a>
                                                </li>
                                                <li className="tab-item-in"><a href="#tab_in_2" data-toggle="tab">UIT CINEMA
                                                    THỦ ĐỨC</a>
                                                </li>
                                            </ul>

                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab_in_1">
                                                    <div className=" mg-top-20">
                                                        <hr/>
                                                        <ul className="nav nav-tabs tab-fix">
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">17:00</a>
                                                            </li>
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">21:30</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab_in_2">
                                                    <div className=" mg-top-20">
                                                        <hr/>
                                                        <ul className="nav nav-tabs tab-fix">
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">17:00</a>
                                                            </li>
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">19:30</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="mg-top-20">
                                <Link className="btn tab-button-dropdown" role="button" to="/slot">TIẾP TỤC</Link>
                            </div>
                        </div>

            </div>
        );
    }
}

export default BookingMovie;
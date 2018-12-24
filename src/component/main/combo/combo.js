import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Combo extends Component {
    render() {
        return (
            <div id="features" className="text-center ">
                <div className="container-fluid title_movie">
                    <h3><a href="#" className="btn active">ƯU ĐÃI</a></h3>
                </div>
                <div className="container fea-container">
                    <div className="row">
                        <div className="col-sm-3 fea-img">
                            <img src="../img/img_combo/1.jpg" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text">
                                    <p className="text-center">
                                        <Link to="/payment" className="fea-fade-button">ĐẶT THÊM</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>COMBO 1</p>
                                <p>277.000đ</p>
                            </div>
                        </div>
                        <div className="col-sm-3 fea-img">
                            <img src="../img/img_combo/2.jpg" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text">
                                    <p className="text-center">
                                        <Link to="/payment" className="fea-fade-button">ĐẶT THÊM</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>COMBO 2</p>
                                <p>277.000đ</p>
                            </div>
                        </div>

                        <div className="col-sm-3 fea-img ">
                            <img src="../img/img_combo/3.jpg" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text">
                                    <p className="text-center">
                                        <Link to="/payment" className="fea-fade-button">ĐẶT THÊM</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>COMBO 3</p>
                                <p>277.000đ</p>
                            </div>
                        </div>

                        <div className="col-sm-3 fea-img ">
                            <img src="../img/img_combo/4.jpg" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text">
                                    <p className="text-center">
                                        <Link to="/payment" className="fea-fade-button">ĐẶT THÊM</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>COMBO 4</p>
                                <p>277.000đ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Combo;
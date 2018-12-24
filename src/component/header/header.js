import React, {Component} from 'react';
import {  BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import fakeAuth from "../main/sub/private_route";
import { connect } from 'react-redux';

const AuthButton = withRouter(
    ({ history }) =>
        fakeAuth.isAuthenticated ? (
            <p>
                Welcome!{}
                <button className="na-sign-in"
                    onClick={() => {
                        fakeAuth.signout(() => history.push("/"));
                    }}
                >
                    <i className="fa fa-sign-out" /> ĐĂNG XUẤT
                </button>
            </p>
        ) : (
            <Link className="na-sign-in" to="/sign_in"><i className="fa fa-user" /> ĐĂNG NHẬP</Link>
        )
);

class Header extends Component {
    
    
    render() {
        return (
            <div>
                <header>
                    <div className="container-fluid bg-gray">
                        <Link className="na-brand" to="/"><img src="/img/index_icon_range.png" width="10%" alt={"icon_web"}/></Link>
                        <div className="navbar-right mg-top-20">
                            <AuthButton />
                        </div>
                        <div className="na-bot mg-top-10">
                            <form className="navbar-form navbar-left" action>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Tìm kiếm tên phim, ưu đãi,..." />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <i className="fa fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <nav className="navbar navbar-default na">
                        <div className="container">
                            <div className="row">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle na-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse na-right" id="myNavbar">
                                    <ul className="nav navbar-nav ">
                                        <li className="dropdown"><a className="na-item dropdown-toggle" data-toggle="dropdown" href="#">PHIM<span className="caret" /></a>
                                            <ul className="dropdown-menu">
                                                <li><Link to="/movie_nowshowing">PHIM ĐANG CHIẾU</Link></li>
                                                <li><Link to="/movie_commingsoon">PHIM SẮP CHIẾU</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link className="na-item " to="/combo">ƯU ĐÃI</Link></li>
                                        <li><Link className="na-item" to="/blog">BLOG ĐIỆN ẢNH</Link></li>
                                        <li className="dropdown"><a className="na-item dropdown-toggle" data-toggle="dropdown" href="#">RẠP<span className="caret" /></a>
                                            <ul className="dropdown-menu">
                                                <li><Link to="/cinema">CÁC CỤM RẠP</Link></li>
                                                <li><Link to="/cinema_speacial">RẠP ĐẶC BIỆT</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link className="na-item" to="/contact">LIÊN HỆ</Link></li>
                                        <li><Link className="na-item" to="/user">THÀNH VIÊN</Link></li>
                                        <li><Link className="na-item" to="/payment">THANH TOÁN</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}
// const mapStateToProps = (state, ownProps) => {
//     return {
//       username: state.username,
//       loginState: state.loginState
//     }
//   }
  export default (Header);
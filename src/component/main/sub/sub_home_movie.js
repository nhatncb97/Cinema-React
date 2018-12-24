import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class sub_home_movie extends Component {
    constructor(props) {
        super(props);
    }
    infoClick = (e) =>  {
        e.preventDefault();
        console.log(this.props.id_index)
        this.props.history.push({pathname: "/movie_info_01/"+this.props.id_index,state: { id_index: this.props.id_index }});
    }
    
    render() {
        return (
            <div className="col-sm-3 fea-img">
            
                <img src={"./img/img_home/index_nowshowing/"+this.props.Img} width="100%" />
                <div className="fea-fade">
                    <button type="button" className="fea-fade-play" data-toggle="modal"
                        data-target="#myModal"><i className="fa fa-play-circle-o" />
                    </button>
                    <div className="fea-fade-text">
                        <hr className="hr-color-orange" />
                        <p className="text-center">
                            <Link to onClick={this.infoClick} refs="id_number" value={this.props.id_index} className="fea-fade-button f-left">CHI TIẾT</Link>
                            <span>18+</span>
                            <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                        </p>
                    </div>
                </div>
                <div className="fea-img-text-bottom">
                    <p>{this.props.eTitle}</p>
                    <p>{this.props.vTitle}</p>
                </div>
                
            </div>
            
        );
    }
}

export default withRouter(sub_home_movie);
import React, {Component} from 'react';
import { Route, Redirect } from "react-router-dom";
import Sign_in from "./sign_in";
import Movie from "./movie/movie";
import Movie_comming from "./movie/movie_comingsoon";
import Slot from "./movie/slot";
import Blogmain from "./blog/blog_main";
import Home from "./home";
import User from "./user";
import Contactmain from "./contact/contact_main";
import Paymentmain from "./payment/payment_main";
import Blogtwo from "./blog/blog_page/blog_two";
import Blogone from "./blog/blog_page/blog_one";
import Combo from "./combo/combo";
import Cinema_special from "./cinema/cinema_speacial";
import Cinema from "./cinema/cinema";
import ForgotPassword from "./sub/fogot_password";
import BookingMovie from "./movie/booking_movie";
import Movie_info_01 from "./movie/sub_movie/movie_info_01";
import Cinema_info_01 from "./cinema/sub_cinema/cinema_info_01";
import fakeAuth from "./sub/private_route"



class Routerr extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <PrivateRoute  path="/user" component={User} />
                <Route path="/sign_in" component={Sign_in} />
                <Route path="/forgot_pass" component={ForgotPassword} />

                <Route path="/combo" component={Combo} />

                <Route path="/movie_nowshowing" component={Movie} />
                <Route path="/movie_info_01" component={Movie_info_01} />
                <Route path="/movie_commingsoon" component={Movie_comming} />
                <Route path="/booking_movie" component={BookingMovie} />
                <PrivateRoute  path="/slot" component={Slot} />

                <Route path="/cinema" component={Cinema} />
                <Route path="/cinema_info_01" component={Cinema_info_01} />
                <Route path="/cinema_speacial" component={Cinema_special} />
                <Route path="/blog" component={Blogmain} />
                <Route path="/blog_one" component={Blogone} />
                <Route path="/blog_two" component={Blogtwo} />
                <Route path="/contact" component={Contactmain} />
                <PrivateRoute  path="/payment" component={Paymentmain} />
            </div>
        );
    }
}


function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/sign_in",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}



export default Routerr;
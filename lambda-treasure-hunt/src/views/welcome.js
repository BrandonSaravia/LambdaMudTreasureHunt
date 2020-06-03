import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/footer';

class Welcome extends Component {
    
    render(){
        return(
            <>
                <section className="welcome-page">
                    <h1 className="title">Lambda Treasure Hunt</h1>
                    <div className="description-container">
                        <div className="description">
                            <p className="description__game">
                                Welcome to Lambda Treasure Hunt! Travel the map, collect gold, change your name, or mine for lambda coin. 
                                The possibilities are endless. Keep in mind that every action in Lambda Treasure Hunt has a cooldown. You win by mining 1 Lambda Coin.
                            </p>
                            <p className="description__sprint">
                                This was a test from Lambda School to use all the Data Structures we've learned. The main goal was to traverse the world
                                using algorithims, and solve problems using algorithims along the way. Hope you enjoy
                                playing around in this world as much as i did. Jump on in!
                            </p>
                        </div>
                    </div>
                    <Link to="/home" className="start-btn">Start</Link>
                </section>
                <Footer />
            </>
        )
    }
}

export default Welcome
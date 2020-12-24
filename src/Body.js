import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';


function Body() {

    

    return (
        <div className="Body">
            <div className="container">
                <br /><br /><br />
                <h1>Latest on <span>StudentCorner updates</span></h1><br />
                <hr />
                <Link to='/update'>
                <button type="button" className="btn">View all updates</button><br />
                </Link>
                <h1>Read on <span>YMCAPEDIA</span></h1>
                <span><i>StudentCorner Blog</i></span><br />
                <hr />
                
                <button type="button" className="btn">Go to YMCApedia</button><br />
                
            </div>
        </div>
    )
}

export default Body

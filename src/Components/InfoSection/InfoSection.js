import React, { Component } from 'react';
import "./InfoSection.css";
import { Avatar } from '@material-ui/core';
import imageSrc from "../../images/pp1.png"

class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <div className="info__container">
                <Avatar src={imageSrc} className="info__image"/>
                <div className="info_content">
                    <div className="info_username"> Parichit kukreti</div>
                    <div className="info_description"> Demo trial for insta clone </div>
                </div>
            </div>
        </div> );
    }
}
 
export default InfoSection;
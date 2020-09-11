import React, {Component} from "react";
import {numm} from "../../lib/Utils";

export default class Deposit extends Component {

    name = "Deposit";

    render() {

        const {userInfo, title, icon, actions} = this.props;

        return (
            <div className="currency-action-panel">
                <h2>Deposit</h2>
                <p>How much ETH would you like to deposit?</p>
                <div className="currency-input">
                    <input type="number" placeholder="Amount in ETH" />
                    <button>Deposit</button>
                </div>
            </div>
        )
    }
}
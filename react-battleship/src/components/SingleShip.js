import React from 'react';
import '../scss/singleship.scss'

class SingleShip extends React.Component {
    render() {
        const { ship, index } = this.props;

        console.log(this.props);

        return (
            <div>
                <span>
                    {ship.name}
                </span>
                <button onClick={() => this.props.addToFleet(index)} className="button">
                    Add to fleet blah {this.props.isInFleet.toString()}
                </button>
            </div>
        );
    }
}

export default SingleShip;
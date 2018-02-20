import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../scss/singleship.scss'


class SingleShip extends React.Component {
    render() {
        const { ship, index } = this.props;

        const shipcardBackground = {
            'backgroundImage': 'linear-gradient(-180deg, rgba(15, 34, 49, .8) 0%, rgba(16, 28, 44, .8) 50%, rgba(49, 29, 40, .9) 100%), url(' + ship.background + ')',
        };

        return (
            <div className="singleship">
                <div className="singleship__header"></div>


                <div className="singleship__content" style={shipcardBackground}>
                    <div className="singleship__image">
                        <img src={`${ship.image}`} alt=""/>
                    </div>

                    <h2 className="singleship__headline">
                        {ship.fraction}'s <br/>{ship.name}
                    </h2>

                    <span className="singleship__price">
                        $ {ship.price}
                    </span>

                    <div className="singleship__details">
                        <div className="singleship__details--left">
                            <span className="singleship__label">{ship.additional.label1}</span>
                            <span className="singleship__value">{ship.additional.value1}</span>
                            <span className="singleship__label">{ship.additional.label2}</span>
                            <span className="singleship__value">{ship.additional.value2}</span>
                        </div>

                        <div className="singleship__details--right">
                            <div className="singleship__durability">
                                <CircularProgressbar
                                    className="myCirclebar"
                                    percentage={ship.durability}
                                />
                            </div>
                        </div>
                    </div>

                    <button onClick={() => this.props.addToFleet(index)} className="button">
                        {this.props.isInFleet ? 'Remove from fleet' : 'Add to fleet'}
                        {
                            this.props.isInFleet ? <mark>🚀</mark> : ''
                        }
                    </button>
                </div>
            </div>
        );
    }
}

export default SingleShip;
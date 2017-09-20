import React from 'react';
import { Box } from 'components/box.jsx';
import { Colorizer } from 'components/colorizer.jsx';
import { Refresh } from 'components/refresh.jsx';
import { getRandomColors, mixColors } from 'helpers/colorHelpers.js';
import styles from '../../css/main.css';

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: props.colors || getRandomColors(5),
            finalColor: '#ffffff'
        }
    }

    refresh() {
        this.setState({
            colors: getRandomColors(5)
        })
    }

    mixColor(color) {
        const mix = mixColors(color, this.state.finalColor);
        console.log('mixing color ', color, ' with ', this.state.finalColor, ', result: ', mix);

        this.setState({
            finalColor: mix
        });
    }

    render() {
        return <div className={ styles.wrapper }>
            <div className={ styles.ground }></div>
            <div className={ styles.container }>
                { this.state.colors.map((data, index) => <Box key={ data.id } color={ data.color } onColorClick={ () => this.mixColor(data.color) } />) }
                <div className={ styles.refresh }><Refresh onClick={ () => this.refresh() } /></div>
            </div>
            <Colorizer color={ this.state.finalColor } />
        </div>;
    }
}

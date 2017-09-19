import React from 'react';
import { Box } from 'components/box.jsx';
import { Colorizer } from 'components/colorizer.jsx';
import styles from '../../css/main.css';

export const Main = () => (
    <div className={ styles.wrapper }>
        <div className={ styles.ground }></div>
        <div className={ styles.container }>
            { [1, 2, 3, 4, 5].map((data, index) => <Box key={ index } label='#f26aa3' />) }
        </div>
        <Colorizer label='#c36ae1' />
    </div>
);

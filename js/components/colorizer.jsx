import React from 'react';
import styles from 'css/colorizer.css';
import { getBgColorStyle } from 'helpers/colorHelpers.js';

export const Colorizer = (props) => (
    <div className={ styles.wrapper }>
        <div className={ styles.label }>{ props.color }</div>
        <div className={ styles.box }>
            <div className={ styles.color } style={ getBgColorStyle(props.color) } />
        </div>
    </div>
);

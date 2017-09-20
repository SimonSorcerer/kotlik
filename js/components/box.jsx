import React from 'react';
import styles from 'css/box.css';
import { getBgColorStyle } from 'helpers/colorHelpers.js';

export const Box = (props) => (
    <div className={ styles.wrapper }>
        <div className={ styles.box } onClick={ props.onColorClick }>
            <div className={ styles.color } style={ getBgColorStyle(props.color) }></div>
        </div>
        <div className={ styles.label }>
            { props.color }
        </div>
    </div>
);

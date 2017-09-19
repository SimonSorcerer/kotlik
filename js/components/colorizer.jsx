import React from 'react';
import styles from 'css/colorizer.css';

export const Colorizer = (props) => (
    <div className={ styles.wrapper }>
        <div className={ styles.label }>{ props.label }</div>
        <div className={ styles.box }>
            <div className={ styles.color }></div>
        </div>
    </div>
);

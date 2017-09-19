import React from 'react';
import styles from 'css/box.css';

export const Box = (props) => (
    <div className={ styles.wrapper }>
        <div className={ styles.box }></div>
        <div className={ styles.label }>{ props.label }</div>
    </div>
);

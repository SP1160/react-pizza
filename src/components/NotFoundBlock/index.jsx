import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>😕</span>
                <br />
                <h1>Ничего не найдено</h1>
            </h1>
            <p className={styles.description}>К сожалению данная странца отсутствует в магазине</p>
        </div>
    );
};

export default NotFoundBlock;

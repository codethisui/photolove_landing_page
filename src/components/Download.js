import React from 'react';
import styles from './styles/download.scss';

const Download = (props) => {
    return (
        <div className={styles.download}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2><span className={styles.orange}>Chocolate</span> pudding dessert jelly <span className={styles.orange}>fruit</span> cake <span className={styles.orange}>tart</span> jelly wafer. </h2>
                    <p>Donut cupcake lemon drops dragée liquorice apple pie powder. Topping sweet lollipop soufflé chocolate liquorice candy canes. </p>
                    <button>Download</button>
                </div>
            </div>
        </div>

    );
}

export default Download;

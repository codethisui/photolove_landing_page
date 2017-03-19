import React from 'react';
import styles from './styles/appFeatures.scss';
import feature1 from './assets/feature1.png';
import feature2 from './assets/feature2.png';
import feature3 from './assets/feature3.png';

const Header = (props) => {
    return (
        <div className={styles.appFeatures}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h2>App Features</h2>
                    <p>Donut sesame snaps donut pie dessert chupa chups wafer dragée. Gummies fruitcake chupa chups cookie liquorice. Chocolate pudding dessert jelly fruitcake tart jelly wafer. Sweet roll carrot cake croissant.</p>
                </div>

                <div className={styles.featuresContainer}>
                    <div className={styles.feature}>
                        <img src={feature1} alt=""/>
                        <h3>Scalable</h3>
                        <p>Croissant ice cream macaroon cake. Dessert jelly beans candy cookie. Bear claw candy canes gingerbread caramels cake. Macaroon applicake gummi bears jelly marzipan.</p>
                    </div>
                    <div className={styles.feature}>
                        <img src={feature2} alt=""/>
                        <h3>Instant</h3>
                        <p>Croissant ice cream macaroon cake. Dessert jelly beans candy cookie. Bear claw candy canes gingerbread caramels cake. Macaroon applicake gummi bears jelly marzipan.</p>
                    </div>
                    <div className={styles.feature}>
                        <img src={feature3} alt=""/>
                        <h3>Something</h3>
                        <p>Croissant ice cream macaroon cake. Dessert jelly beans candy cookie. Bear claw candy canes gingerbread caramels cake. Macaroon applicake gummi bears jelly marzipan.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;

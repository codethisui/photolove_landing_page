import React from 'react';
import styles from './styles/header.scss';
import iphone from './assets/iphone.png';
import cta_phone from './assets/cta_phone.png';

const Header = (props) => {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <a href="/" className={styles.logo}>
                        photolove
                    </a>

                    <div className={styles.nav}>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">Features</a>
                            </li>
                            <li>
                                <a href="/">Download</a>
                            </li>
                            <li>
                                <a href="/">Blog</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.cta}>

                    <div className={styles.ctaInfo}>
                        <h2 className={styles.heading}>Chocolate Pudding Dessert Jelly</h2>
                        <p>
                            Fruitcake donut gummies. Candy liquorice biscuit. Sugar plum jelly gummi bears brownie toffee cupcake caramels brownie cookie.
                        </p>

                        <a href="/" className={styles.ctaButton}>
                            <img src={cta_phone} alt="" className={styles.ctaPhone}/>
                            Download on appstore
                        </a>
                    </div>

                    <div className={styles.ctaImage}>
                        <img src={iphone} alt=""/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Header;

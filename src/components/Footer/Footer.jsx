import styles from './Footer.module.scss';
export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`container ${styles.container}` }>
                <div className={styles.col}>
                    <h6 className={styles.heading}>
                        Home
                    </h6>
                    <p className={styles.title}>
                        Categories
                    </p>
                    <p className={styles.title}>
                        Devices
                    </p>
                    <p className={styles.title}>
                        Pricing
                    </p>
                    <p className={styles.title}>
                        FAQ
                    </p>
                </div>
                <div className={styles.col}>
                    <h6 className={styles.heading}>
                        Movies
                    </h6>
                    <p className={styles.title}>
                        Gernes
                    </p>
                    <p className={styles.title}>
                        Trending
                    </p>
                    <p className={styles.title}>
                        New Release
                    </p>
                    <p className={styles.title}>
                        Popular
                    </p>
                </div>
                <div className={styles.col}>
                    <h6 className={styles.heading}>
                        Show
                    </h6>
                    <p className={styles.title}>
                        Gernes
                    </p>
                    <p className={styles.title}>
                        Trending
                    </p>
                    <p className={styles.title}>
                        New Release
                    </p>
                    <p className={styles.title}>
                        Popular
                    </p>
                </div>
                <div className={styles.col}>
                    <h6 className={styles.heading}>
                        Support
                    </h6>
                    <p className={styles.title}>
                        Contact Us
                    </p>
                   
                </div>
                <div className={styles.col}>
                    <h6 className={styles.heading}>
                        Subscription
                    </h6>
                    <p className={styles.title}>
                        Plans
                    </p>
                    <p className={styles.title}>
                        Feature
                    </p>
                    
                </div>
                <div className={styles.col}>
                    <h6 className={styles.heading}>
                        Connect With Us
                    </h6>
                    <div className={styles.social}></div>
                </div>
            </div>
        </div>
    );
}
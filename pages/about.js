/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const About = () => {
    return ( 
        <>
            <div className={styles.blogHeading}>
                <div className={styles.blogTitle}></div>
                <div className={styles.blogPic}>
                    <img src={"/Before.jpg"} alt="Ten Flags Logo" className={styles.blogImage} />
                </div>
            </div>
        </>
     );
}
 
export default About;
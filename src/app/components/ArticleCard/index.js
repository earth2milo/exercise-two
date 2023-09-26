"use client";
import Link from 'next/link';
import styles from "./ArticleCard.module.css";

const ArticleCard = ({ date, description, title, id, imageSrc, imageAlt}) => {
    return (
        <div className={styles.ArticleCard}> 
        <div className={styles.ArticleCardImage}>
            <img src={imageSrc} alt={imageAlt}/>
        </div>
        <div className={styles.ArticleCardInterior}>
            <h2>{title}</h2>
            <p className={styles.dateStyle}>{date}</p>
            <p className={styles.descStyle}>{description}</p>
            <p><Link href={`article/${id}`}>Read More</Link></p>
            </div>
        </div>
    );
};

export default ArticleCard;
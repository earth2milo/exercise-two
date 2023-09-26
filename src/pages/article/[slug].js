import {useRouter } from 'next/router';
import Data from "../../app/components/data";
import styles from "../../app/components/ArticleCard/ArticleCard.module.css"
import ArticleCard from '@/app/components/ArticleCard';

export default function article() {
    const router = useRouter()
    const slug = router.query.slug;

    const articleData = Data.find((val) => val.id == slug);

    if(!articleData) return null;

    return (
        <main className={styles.ArticleCard}>
            <h1>{articleData.title} </h1>
            <div className={styles.ArticleCardInterior}>
            <p>{articleData.blurb}</p>
            <p>{new Date(articleData.publishedDate).toDateString()}</p>
            <p>{articleData.articleText.map((text) => (<p>{text.data} </p>))}</p>
            </div>
        </main>
        );
}
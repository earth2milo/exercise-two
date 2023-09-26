
import styles from '../app/page.module.css';
import Data from '../app/components/data';
import ArticleCard from '@/app/components/ArticleCard';

export default function Home() {
const projectName = 'Exercise Two';
console.log(Data);
  return (
    <main className={styles.page}>
         <h1>{projectName}</h1>
    {Data.map((article) => (
          <ArticleCard 
          key={article.id} 
            title={article.title}
            id={article.id}
            description={article.blurb}
            date={new Date(article.publishedDate).toDateString()}
            imageAlt={article.image.alt}
            imageSrc={article.image.url}
          />
        ))}
      </main>
  );
}


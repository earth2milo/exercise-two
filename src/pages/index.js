
import styles from '../app/page.module.css';
import Data from '../app/components/data';
import ArticleCard from '@/app/components/ArticleCard';
export default function Home() {
const projectName = 'Exercise Two';
console.log(Data);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1> exercise two </h1>
        <p> change</p>
        <ArticleCard title="hii" description="wow"/>
        
    
      
      </div>
    </main>
  );
}


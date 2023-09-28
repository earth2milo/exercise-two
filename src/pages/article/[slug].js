import {useRouter } from 'next/router';
import Data from "../../app/components/data";
import styles from "../../app/components/ArticleCard/ArticleCard.module.css"
import "../../app/globals.css";


export default function article() {
    const router = useRouter()
    const slug = router.query.slug;
    const articleData = Data.find((val) => val.id == slug);

    if(!articleData) return null;

    return (
        
        <main>
            <div className={styles.articleHeader} style={ {backgroundImage: `url('${articleData.image.url}')`} }>
          
            </div> 
            <div className={styles.articleWrapper}>
            <div className={styles.ArticleCardInterior}>

            <h1 className>{articleData.title} </h1>
            <p>{new Date(articleData.publishedDate).toDateString()}</p>
            <p className={styles.articleHeaderBlurb}>{articleData.blurb}</p>

            </div>

        <div className={styles.articleBody}>

           {/* // <p>{articleData.blurb}</p> */}
           {articleData.articleText.map((textChunk) => {
                switch(textChunk.type) {
                    case "p":
                            return <p>{textChunk.data}</p>;
                    case "h2":
                            return <h2>{textChunk.data}</h2>;
                    case "h3":
                        return <h3>{textChunk.data}</h3>;
                    default:
                        return <p>{textChunk.data}</p>;
                }
            })}
               
                </div>
                </div>
        </main>
        );
}


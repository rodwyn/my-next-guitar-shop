import { formatingDate } from "@/utils.helpers";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/blog.module.css';

export default function Post({ post }) {
  const { content, image, title, url, publishedAt } = post;
  
  return (
    <article>
      <Image 
        src={ image.data.attributes.formats.medium.url }
        width={ 600 }
        height={ 400 }
        alt={ title }
      />
      <div className={styles.contenido}>
        <h3>{ title }</h3>
        <small className={ styles.fecha }>{ formatingDate(publishedAt) }</small>
        <p className={styles.resumen}>{ content }</p>
        <Link href={ `/blog/${url}` } legacyBehavior>
          <a className={ styles.enlace }> Leer más </a>
        </Link>
      </div>
    </article>
  )
}

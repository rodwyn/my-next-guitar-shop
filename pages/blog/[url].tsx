import Layout from "@/components/layout"
import { formatingDate } from "@/utils.helpers";
import Image from "next/image";
import styles from '../../styles/blog.module.css';

export default function Post({ post }) {
  const { content, image, title, url, publishedAt } = post[0].attributes;


  return (
    <Layout
      title={ title }
    >
      <article className={ `${ styles.post } ${ styles['mt-3']}`}>
        <Image 
          src={ image.data.attributes.formats.medium.url }
          width={ 600 }
          height={ 400 }
          alt={ title }
        />
        <div className={styles.contenido}>
          <h3>{ title }</h3>
          <small className={ styles.fecha }>{ formatingDate(publishedAt) }</small>
          <p className={styles.texto}>{ content }</p>
        </div>
      </article>
    </Layout>
  )
}

export async function getServerSideProps({ query: { url }}) {
  const response = await fetch(`${ process.env.API_URL }/posts?filters[url]=${url}&populate=image`);
  const { data:post } = await response.json();

  return {
    props: {
      post
    }
  }
}

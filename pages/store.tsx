import Guitar from '@/components/guitar';
import Layout from '@/components/layout';
import styles from '../styles/grid.module.css';

export default function Store({ guitars  }) {
  return (
    <Layout
      title="Tienda Virtual"
      description="My Next Guitar Shop - Tienda Virtual"
    >
      <main className="container">
        <h1 className="heading"> Nuestra colección</h1>

        <div className={ styles.grid }>
          {
            guitars?.map( guitar => (
              <Guitar key={ guitar.id } guitar={ guitar.attributes } />
            ))
          }
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${ process.env.API_URL }/guitars?populate=image`);
  const { data:guitars } = await response.json();

  return {
    props: {
      guitars
    }
  }
}

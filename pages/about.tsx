import Layout from '@/components/layout';
import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <Layout
      title="Nosotros"
      description="My Next Guitar Shop - Nosotros"
    >
      <div className="container">
        <h2 className="heading">Nosotros</h2>
        <div className={ styles.content }>
          <Image width={100} height={40} src="/img/nosotros.jpg" alt="nosotros" />
          <div>
            <p>
              Quisque ut urna at sem accumsan facilisis nec a tortor. Nullam varius metus eget euismod imperdiet. Phasellus pretium ex et facilisis lobortis. Donec elementum at libero a eleifend. Sed ac pulvinar purus, id interdum quam. Cras at ex arcu. Nam lobortis risus ipsum, at mattis nibh iaculis quis. Nunc in ante sit amet erat commodo suscipit. Nunc a rhoncus nulla, nec lobortis justo. Vivamus consectetur nisl a ornare vestibulum. Etiam interdum pretium lectus eu vestibulum. Etiam diam urna, euismod aliquet eros eu, dignissim viverra est. Curabitur sit amet orci a tortor aliquam fermentum.
            </p>
            <p>
              Fusce viverra sagittis rutrum. Mauris eleifend lectus quam, id molestie mi venenatis ac. Sed mattis eros purus, in efficitur nisl auctor pharetra. Donec volutpat lorem non felis faucibus, at mattis risus vestibulum. Nam ipsum augue, maximus vel feugiat ac, laoreet imperdiet libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas non metus augue. Donec condimentum pellentesque nibh, vel tincidunt ipsum eleifend vel. In hac habitasse platea dictumst. Suspendisse eleifend vitae nunc vel rutrum. Cras pellentesque tincidunt massa non euismod. Nullam ut volutpat justo. Nam ante diam, efficitur vel cursus vel, aliquam ut odio. Etiam a magna velit. Nulla semper egestas ex sit amet tristique. Quisque tempus non purus sit amet faucibus.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}


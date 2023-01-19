import Link from 'next/link';
import styles from '../styles/Footer.module.css';


export default function Footer() {
  return (
    <footer className={ styles.footer }>
      <div className={`container ${ styles.content }`}>
        <nav className={ styles.navigation} >
          <Link href="/about"> Nosotros </Link>
          <Link href="/blog"> Blog </Link>
          <Link href="/store"> store </Link>
        </nav>

        <p className={ styles.copyright }>Todos los derechos reservados { new Date().getFullYear() }</p>
      </div>
    </footer>
  )
}

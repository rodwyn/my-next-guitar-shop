import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css"

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`container ${ styles.bar }`}>
        <Link href="/">
          <Image src="/img/logo.svg" width="300" height="40" alt="Home" className={styles.logo}/>
        </Link>
        <nav className={ styles.navigation }>
          <Link href="/about" legacyBehavior>
            <a className={ router.pathname === '/about' ? styles.active : '' }>Nosotros</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className={ router.pathname === '/blog' ? styles.active : '' }>Blog</a>
          </Link>
          <Link href="/store" legacyBehavior>
            <a className={ router.pathname === '/store' ? styles.active : '' }>store</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

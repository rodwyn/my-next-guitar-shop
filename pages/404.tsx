import Layout from "@/components/layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout
      title="Página no encontrada"
    >
      <>
        <h1 className="error">Página no encontrada</h1>
        <Link href="/" legacyBehavior>
          <a className="error-enlace">
            Inicio
          </a>
        </Link>
      </>
    </Layout>
  )
}


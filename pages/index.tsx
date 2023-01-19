import Layout from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout
      title="Home"
      description="My Next Guitar Shop"
    >
      <>
        <h1>Hello world!!!</h1>
        <Link href="/about">About us</Link>
      </>
    </Layout>
  )
}

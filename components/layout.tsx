import Head from 'next/head'
import React from 'react'
import Footer from './footer';
import Header from './header';

export interface ILayout {
  children: JSX.Element | undefined;
  title?: string | undefined;
  description?: string | undefined;
}

export default function Layout({ children , title = "", description = "" } : ILayout):JSX.Element {
  return (
    <>
      <Head>
        <title>{`Guitar - ${ title }`}</title>
        <meta name="description" content={ description } />
      </Head>

      <Header />
      { children }
      <Footer />
    </>
  )
}



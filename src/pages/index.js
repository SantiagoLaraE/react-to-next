import ProductList from 'containers/ProductList';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>React Shop</title>
        <meta name="description" content="Nuevooo" />
      </Head>
      <ProductList />
    </>
  );
}

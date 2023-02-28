import { Fragment } from "react";
import { Product } from "@/data/static-product";
import { getData } from "@/data/data-product";

type Props = {
  loadedProduct: Product;
};

type StaticContext = {
  params: {
    pid: string;
  };
};

export default function ProductDetailPage(props: Props) {
  const { loadedProduct } = props;

  // need to use this code if the fallback set to true
  if(!loadedProduct) {
    return <p>Loading...</p>
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context: StaticContext) {
  const { params } = context;
  const productId = params.pid;
  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  //fallback true : if no product found on database redirect it to nextJs notFound page, (or can costumize)
  if (!product) {
    return {notFound: true};
  }
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const pathWithParams = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathWithParams,
    fallback: true,
    //set fallback to true means that productID will be generated automatically  & and if you set to false "it will only look at possible ID  avaialable on the database
    // if fallback set to blocking , the nextJs will block and wait for the page to render and we dont hve to create !loading logic
    // fallback: 'blocking',
  };
}

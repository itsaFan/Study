import styles from "@/styles/Home.module.css";
import PageHeadUI from "@/components/UI/page-head";
import { ProductProps } from "@/data/static-product";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";

export default function Homepage(props: ProductProps) {
  const { products } = props;

  return (
    <>
      <PageHeadUI title="Home" />
      <ul>
        {products.map((product) => (
          <li key={product.id}><Link href={`/${product.id}`}>{product.title}</Link></li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  console.log('(Re-)Generating...');
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  //fs/promises module returns a buffer that needs to be converted to a string before it can be parsed as JSON.
  //To convert the buffer to a string, pass the encoding type "utf-8" as the second argument to the readFile method
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  //if no data then redirect to spesific page
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  //if data 0 or no data then give notFound page
  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
      // [{ id: "p1", title: "Product 1" }],
    },
    //every 10 sec regenerated
    revalidate: 10,
    // notFound: true,
  };
}

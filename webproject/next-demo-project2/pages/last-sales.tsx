import { Sale } from "@/data/sale-data";
import { useState } from "react";
import useSWR from "swr";

// interface LastSalesPageProps {
//   sales: Sale[];
// }

export default function LastSalesPage() {
  // const [sales, setSales] = useState(props.sales);
  const { data, error } = useSWR<Sale[], Error>("https://test-nextjs-backend-default-rtdb.firebaseio.com/sales.json", async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    const transformedSales: Sale[] = [];
    for (const key in data) {
      transformedSales.push({ id: key, username: data[key].username, volume: data[key].volume });
    }
    return transformedSales;
  }, { fallback: <p>Loading...</p> });

  // Standard React data Fetching
  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://test-nextjs-backend-default-rtdb.firebaseio.com/sales.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const transformedSales: Sale[] = [];
  //         for (const key in data) {
  //           transformedSales.push({ id: key, username: data[key].username, volume: data[key].volume });
  //         }
  //         setSales(transformedSales);
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (error) {
    return <p>Error, fail to load</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }

  return (
    <div>
      <ul>
        {data?.map((sale) => (
          <li key={sale.id}>
            {sale.username} - {sale.volume}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
    console.log("regenerating")
  const response = await fetch("https://test-nextjs-backend-default-rtdb.firebaseio.com/sales.json");
  const data = await response.json();

  const transformedSales: Sale[] = [];
  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return { props: { sales: transformedSales }, revalidate: 60 };
}

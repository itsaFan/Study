import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    {
      id: "ae",
      name: "Aery",
    },
    {
      id: "lu",
      name: "Luria",
    },
  ];
  return (
    <div>
      <h1>Client page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[clientId]",
                query: {clientId: client.id}
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}

        {/* {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))} */}
        {/* <li>
          <Link href="/clients/ae">Aery</Link>
        </li>
        <li>
          <Link href="/clients/lu">Luria</Link>
        </li> */}
      </ul>
    </div>
  );
}

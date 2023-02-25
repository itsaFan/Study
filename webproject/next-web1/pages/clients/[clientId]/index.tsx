import { useRouter } from "next/router";

export default function ClientProjects() {
  const router = useRouter();
  console.log(router.query);

  function loadSpecificProjectHandler() {
    //load data
    // router.push('/clients/ae/projectA');
    router.push({
      pathname: '/clients/[clientId]/[clientprojectId]',
      query: {clientId: 'ae', clientprojectId: 'projectA'},
    })

  }
  return (
    <div>
      <div>
        <h1>Developed project A for client </h1>
        <button onClick={loadSpecificProjectHandler}>Load Project A</button>
      </div>
      <div>
        <h1>Developed project B for client </h1>
        <button>Load Project B</button>
      </div>
      <div>
        <h1>Developed project C for client </h1>
        <button>Load Project C</button>
      </div>
    </div>
  );
}

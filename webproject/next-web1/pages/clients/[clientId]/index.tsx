import { useRouter } from "next/router";

export default function ClientProjects() {
    const router = useRouter();
    console.log(router.query);
  return (
    <div>
      <h1>Developed project for client A</h1>
      <h1>Developed project for client B</h1>
      <h1>Developed project for client C</h1>
    </div>
  );
}

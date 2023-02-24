import { useRouter } from "next/router";

export default function SelectedClientProjects() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Selected Project for Specific Client</h1>
    </div>
  );
}

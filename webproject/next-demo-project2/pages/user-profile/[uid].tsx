import { UserIdPageProps, UserServerContext } from "@/data/user-data";

export default function UserIdPage(props: UserIdPageProps) {
  return (
    <div>
      <h1>{props.id}</h1>
    </div>
  );
}

export async function getServerSideProps(context: UserServerContext) {
  const { params } = context;

  const userId = params.uid;

  return {
    props: {
      id: "this is userId \n -" + userId,
    },
  };
}

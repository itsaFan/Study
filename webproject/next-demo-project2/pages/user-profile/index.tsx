import { userProps, UserServerContext } from "@/data/user-data";



export default function UserProfilePage(props: userProps) {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
}

export async function getServerSideProps(context: UserServerContext) {
  const { params, req, res } = context;
//   console.log(req);
//   console.log(res);

  return {
    props: { username: "itsaFan" },
  };
}

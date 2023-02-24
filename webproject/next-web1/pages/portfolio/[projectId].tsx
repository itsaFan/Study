import { useRouter } from "next/router"

export default function PortfolioProjectPage () {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    // send a request to some backend server
    // to fetch the piece of data with an id of router.query.projectId
    return (
        <div>
            <h1>The portfolio project page</h1>
        </div>
    )
}
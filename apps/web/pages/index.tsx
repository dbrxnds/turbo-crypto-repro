import { mysql } from "../src/mysql"

export const getServerSideProps = () => {
const t = mysql.user.findMany()

    return {
        props: {},
    }

}

export default function Page() {
    return <div>Hi</div>
}
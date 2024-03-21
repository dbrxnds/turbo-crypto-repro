// import { mysql } from "../src/mysql"

export const getServerSideProps = () => {
// const t = mysql.user.findMany()

    return {
        props: {},
    }

}

export default function Page() {
    return <div>Hi <LogInstanceInApiButton /></div>
}

function LogInstanceInApiButton() {
    const handleClick =  async () => {
await fetch('/api/test')
    }

    return <button onClick={handleClick}>Click me to log instance server-side</button>
}
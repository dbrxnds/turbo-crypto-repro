import { mysql } from "../../src/mysql";

export default function route(req, res) {
    console.log(mysql.user)

    res.status(200).json({ name: 'John Doe' })
}
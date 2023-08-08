export default async function handler(req, res) {
    if (req.method === "POST") {
        res.json({ metodo: "Post" })
    } else {
        res.json({ metodo: 'Get' })
    }
}
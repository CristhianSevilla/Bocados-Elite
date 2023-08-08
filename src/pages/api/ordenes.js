export default async function handler(req, res) {

    console.log(req.body);
    if (req.method === "POST") {
        res.json({ metodo: "Post" })
    }
}
import { PrismaClient } from "@prisma/client"; 

export default async function handler(req, res) {

    const prisma = new PrismaClient()

    console.log(req.body);
    if (req.method === "POST") {

        //Los datos de data deben coincidir con el modelo del esquema de prisma
        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                fecha: req.body.fecha,
                total: req.body.total,
                pedido: req.body.pedido,
            },
        })
        res.json(orden)
    }
}
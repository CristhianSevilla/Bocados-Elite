import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {

    const prisma = new PrismaClient()

    //Obtener ordenes que no se han entregado
    const ordenes = await prisma.orden.findMany({
        where: {
            estado: false,
        }
    });
    res.status(200).json(ordenes);

    //Crear ordenes
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
        res.status(200).json(orden)
    }
}
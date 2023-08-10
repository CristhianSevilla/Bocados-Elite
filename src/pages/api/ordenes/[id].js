import { PrismaClient } from "@prisma/client";

export default async function handler(req, res){

    const prisma = new PrismaClient()

    if (req.method === "POST") {
        //Recuperar el Id de la url
        const {id} = req.query

        //Actualizar Orden
        const ordenActualizada = await prisma.orden.update({
            where: {
                //parsear el id porque viene como string
                id: parseInt(id)
            },
            data: {
                estado: true
            }
        })

        res.status(200).json(ordenActualizada)
    }
} 
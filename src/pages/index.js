import { PrismaClient } from "@prisma/client"

export default function Home({categorias}) {

  console.log(categorias);
  return (
    <h1>Hola Mundo</h1>
  )
}


//Consultar la base con getServerSideProps

export const getServerSideProps = async () => {

  const prisma = new PrismaClient();

  const categorias = await prisma.categoria.findMany();

  return{
    props: {categorias}
  }

}

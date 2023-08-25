// EXERCÍCIO 3
// SELECIONAR POSTS POR AUTOR

type Post = {
    autor: string,
    texto: string
}

const postsHogrwarts:Post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
      },
      {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
      },
      {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
      },
      {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
      },
      {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
      }
]

function buscarPostsPorAutor(posts: Post[], autorInformado: string): Post[] {
    return posts.filter((post) => {
      return post.autor === autorInformado;
    });
  }
  
  const autorDesejado = "Dobby";
  const postsDoAutor = buscarPostsPorAutor(postsHogrwarts, autorDesejado);
  
  console.log(`Posts do autor ${autorDesejado}:`, postsDoAutor);  
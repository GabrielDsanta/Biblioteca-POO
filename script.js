

let choice = true
let Livros = []
let Bibliotecas = []

class Livro{
    Titulo
    Autor
    Editora
    AnoPub
    Disponibilidade
}

class Biblioteca{
    Nome
    Endereco
    Telefone

    FindBook(nome){
        Livros.forEach(Verificate)

        function Verificate(item){
            if(item.Titulo == nome){
                return alert(`${item.Titulo}, ${item.Autor}, ${item.Editora}, ${item.AnoPub}, ${item.Disponibilidade},`)
            }
        }
    }

    BorrowBook(nome){
        Livros.forEach(VerificateBook)

        function VerificateBook(item){
            if(item.Titulo == nome){
                if(item.Disponibilidade == true){
                    item.Disponibilidade = false
                    return alert("Livro emprestado com sucesso")
                }

                else{
                    return alert(`O Livro ${item.Titulo} não tem Disponibilidade no momento`)
                }
            }
        }
    }
}

while(choice){
    choice = prompt("1 Cadastrar Livro /// 2 Acessar Biblioteca")

    switch(choice){
        case "1":
        MakeBook()
        break;

        case "2":
        MakeBiblioteca()
        break;

        default:
        alert("Opção invalida")
        break;
    }
}
function MakeBook(){
    let NewBook = new Livro()

    NewBook.Titulo = prompt("Qual o nome do Livro ?")
    NewBook.Autor = prompt("Qual o autor do Livro ?")
    NewBook.Editora = prompt("Qual a Editora do Livro ?")
    NewBook.AnoPub = prompt("Qual o Ano do Livro ?")
    NewBook.Disponibilidade = prompt("Qual a disponibilidade do Livro ? /// 1 para Disponível /// 2 para Indisponível")
    if(NewBook.Disponibilidade == "1"){
        NewBook.Disponibilidade = true
    }

    if(NewBook.Disponibilidade == "2"){
        NewBook.Disponibilidade = false
    }

    Livros.push(NewBook)

}

function MakeBiblioteca(){
    let opcao = prompt("1 Criar Biblioteca /// 2 Procurar livro /// 3 Emprestimo De Livro")
    switch(opcao){

        case "1":
        let NewBiblioteca = new Biblioteca()

        NewBiblioteca.Nome = prompt("Qual o nome da Biblioteca ?")
        NewBiblioteca.Endereco = prompt("Qual o endereço da Biblioteca ?")
        NewBiblioteca.Telefone = prompt("Qual o telefone da Biblioteca ?")   
            
        Bibliotecas.push(NewBiblioteca)
        break;
        
        case "2":
        let nome = prompt("Qual o nome do livro ?")        
        Bibliotecas[0].FindBook(nome)    
        break;

        case "3":
        let bookName = prompt("Qual o nome do livro ?")        
        Bibliotecas[0].BorrowBook(bookName)    
        break;

        default:
        alert("Opção Inválida")
        break;
    }
}
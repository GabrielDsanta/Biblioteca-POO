

let choice = true
let Livros = []
let Bibliotecas = []

class Livro{
    Titulo
    Autor
    Editora
    AnoPub
    Disponibilidade

    constructor(titulo, autor, editora, anoPub){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoPub = anoPub
    }
}

class Biblioteca{
    Nome
    Endereco
    Telefone
    AcervoDeLivros = []
    Emprestimos = []

    constructor(nome, endereco, telefone){
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
    }

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
                    Bibliotecas[0].Emprestimos.push(nome)
                    return alert("Livro emprestado com sucesso")
                }

                else{
                    return alert(`O Livro ${item.Titulo} não tem Disponibilidade no momento`)
                }
            }
        }
    }

    GiveBackBook(nome){
        Livros.forEach(VerificateBook)

        function VerificateBook(item, index){
            if(item.Titulo == nome){
                if(item.Disponibilidade == false){
                    item.Disponibilidade = true
                    Bibliotecas[0].Emprestimos.splice(index, 1)
                    return alert("Livro devolvido com sucesso")
                }

                else{
                    return alert(`O Livro ${item.Titulo} não foi emprestado pra ser devolvido`)
                }
            }
        }
    }

    AddBookOnAcervoDeLivros(nome){
        Livros.forEach(ProcurarBook)

        function ProcurarBook(item){
            if(item.Titulo == nome){
                if(item.Disponibilidade == true){
                    Bibliotecas[0].AcervoDeLivros.push(nome)
                    return alert("Livro adicionado com sucesso a sua coleção")
                }

                else{
                    return alert(`O Livro ${item.Titulo} não foi encontrado`)
                }
            }
        }
    }
}

class User{
    Nome

    constructor(nome){
        this.Nome = nome
    }
}

class Client extends User{
    Curso
    AnoInicio
    AnoTermino

    constructor(nome,curso, anoInicio, anoTermino){
        super(nome)
        this.Curso = curso
        this.AnoInicio = anoInicio
        this.AnoTermino = anoTermino
    }
}

class Funcionario extends User{
    Senha

    constructor(nome, senha){
        super(nome)
        this.Senha = senha
    }
    
}

class Emprestimo extends User{
    Livro
    Usuario

    constructor(nomeLivro, usuario){
        super(usuario)
        this.Livro = nomeLivro
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

   let tituloParametro = prompt("Qual o nome do Livro ?")
   let autorParametro = prompt("Qual o autor do Livro ?")
   let editoraParametro = prompt("Qual a Editora do Livro ?")
   let anoParametro = prompt("Qual o Ano do Livro ?")

   if(tituloParametro == ""){    
        return alert("Não foi possível cadastrar o livro")
    }

   let NewBook = new Livro(tituloParametro, autorParametro, editoraParametro, anoParametro)

   NewBook.Disponibilidade = prompt("Qual a disponibilidade do Livro ? /// 1 para Disponível /// 2 para Indisponível")
    if(NewBook.Disponibilidade == "1"){
        NewBook.Disponibilidade = true
    }

    if(NewBook.Disponibilidade == "2"){
        NewBook.Disponibilidade = false
    }

    else{
        return alert("Opção inválida")
    }

    Livros.push(NewBook)

}

function MakeBiblioteca(){
    let opcao = prompt("1 Criar Biblioteca /// 2 Procurar livro /// 3 Emprestimo De Livro /// 4 Devolver Livro /// 5 Adicionar Na Coleção De Livros")
    switch(opcao){

        case "1":
        let NewBiblioteca = new Biblioteca()

        NewBiblioteca.Nome = prompt("Qual o nome da Biblioteca ?")
        NewBiblioteca.Endereco = prompt("Qual o endereço da Biblioteca ?")
        NewBiblioteca.Telefone = prompt("Qual o telefone da Biblioteca ?")   
            
        Bibliotecas.push(NewBiblioteca)
        break;
        
        case "2":
        if(Livros.length == 0){
            return alert ("Você ainda não cadastrou nenhum livro")
        }

        else{
            let nome = prompt("Qual o nome do livro ?")        
            Bibliotecas[0].FindBook(nome)    
        }
        break;

        case "3":
        if(Livros.length == 0){
            return alert ("Você ainda não cadastrou nenhum livro")
        }

        else{
            let bookName = prompt("Qual o nome do livro ?")        
            Bibliotecas[0].BorrowBook(bookName)    
        }
        break;

        case "4":
        if(Livros.length == 0){
            return alert ("Você ainda não cadastrou nenhum livro")
        }

        else{
            let bookNameParametro = prompt("Qual o nome do livro ?")        
            Bibliotecas[0].GiveBackBook(bookNameParametro)    
        }
        break;

        case "5":
        if(Livros.length == 0){
            return alert ("Você ainda não cadastrou nenhum livro")
        }

        else{
            let addBookParametro = prompt("Qual o nome do livro ?")
            Bibliotecas[0].AddBookOnAcervoDeLivros(addBookParametro)
        }
        break;


        default:
        alert("Opção Inválida")
        break;
    }
}

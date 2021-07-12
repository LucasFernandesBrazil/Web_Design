 // Novo recurso do ES2015


 const pessoa = {
     nome: 'Lucas',
     idade: 19,
     endereco: {
         logradouro: 'C-156',
         numero: 36
     }
 }

 const { nome, idade } = pessoa
 console.log(nome, idade)

 const {nome: n, idade: i} = pessoa
 console.log (n, i)

 const { endereco: {logradouro, numero, cep}} = pessoa
 console.log (logradouro, numero, cep)
window.addEventListener("load", ()=>{

    // Chamando o input do formulário
    let $input = document.querySelector("input");

    // Chamando cada tecla do teclado virtual
    // * O value do elemento já foi setado diretamente no próprio HTML
    let $keyboard = document.querySelectorAll(".key");

    // Percorrendo todos os elementos do meu teclado para te-los carregados na window
    $keyboard.forEach((e)=>{

        // Adicionando o evento de clique para o elemento atual que eu clicar
        e.addEventListener("click", ()=>{
            
            // regra utilizada:
            // * $input.value, pego o valor atual do input do formulário
            // ** $input.value = $input.value + e.value, ordeno que o valor atual do input receberá
            // ** o valor atual do YouTube mais o valor do elemento que eu cliquei.
            // *** ( $input.value = ... ) Dessa forma eu já imprimo o valor direto no .value do meu elemento
            // **** Fonte principal de pesquisa ( https://www.youtube.com/watch?v=dbVHI0x3lj0&t=336s ).

            $input.value = $input.value + e.value;
        })
    });
});
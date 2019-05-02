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
            // ** o valor atual do input mais o valor do elemento que eu cliquei.

            // *** ( $input.value = ... ) Dessa forma eu já imprimo o valor direto no .value do meu elemento

            // **** Fonte principal de pesquisa ( https://www.youtube.com/watch?v=dbVHI0x3lj0&t=336s ).

            $input.value = $input.value + e.value;

            // Limpar o campo
            // * Verifico se o elemento clicado contem a classe clear
            if(e.classList.contains("clear")){
                // se tiver a classe clear, ela limpa o conteúdo do input
                $input.value = "";
            }

            // Apagar último digito do campo
            // * Verifico se o elemento contem a classe backspace
            if(e.classList.contains("backspace")){
                // se tiver eu defino que o valor do input vai receber a cadeia de caracteres -1.
                // * $input.value.substring() retorna a cadeia de caracteres seguindo os paramentros
                // * $input.value.substring(onde começa, (qual a posição que eu quero pegar)).
                
                // ** Fonte principal de pesquisa ( http://rogeralmeida.com.br/blog/2011/06/03/retirar-ultimo-caractere-de-string-em-javascript-e-php/ ).
                // ** Fonte principal de pesquisa ( https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring ). 
                $input.value = $input.value.substring(0, ($input.value.length - 1));
            }
        })
    });


});
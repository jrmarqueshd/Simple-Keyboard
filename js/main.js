window.addEventListener("load", ()=>{

    // Chamando o input do formulário
    let $input = document.getElementById("input");

    // chamando as seções de dominios
    let $emailDomains = document.getElementById("emailDomains");
    let $siteDomains = document.getElementById("siteDomains");

    // chamando cada elemento dos dominios
    let $eachEmailDomain = document.querySelectorAll(".key-email");
    let $eachUrlDomain = document.querySelectorAll(".key-url");

    // Chamando cada tecla do teclado virtual
    // * O value do elemento já foi setado diretamente no próprio HTML
    let $keyboard = document.querySelectorAll(".key");

    // Chamando o teclado númerico
    // * Esse elemento já está setado com display none por default
    let $numericKeyboard = document.getElementById("numericList");

    // Chamando o teclado de caracteres especiais
    // * Esse elemento já está setado com display none por default
    let $symbolKeyboard = document.getElementById("symbolList");

    // Chamando o teclado de dominios ágeis
    // * Esse elemento já está setado com display none por default
    let $domainsKeyboard = document.getElementById("domainList");

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

            // CapsLock
            // * e.classList.contains eu faço a verificação se o elemento tem a classe capslock
            if(e.classList.contains("capslock")){
                // percorro todos os itens do meu array
                $keyboard.forEach((t)=>{
                    // seto uma classe que dará o efeito de capslock nos itens do meu array
                    t.classList.toggle("-caps-active");
                });
                // Adicionando Efeito de botão ativo no elemento
                e.classList.toggle("is-active");

                // removo o efeito de capslock da tecla capslock
                e.classList.remove("-caps-active");
            }   

            // verifico se os itens do meu array possuem a classe -caps-active
            if(e.classList.contains("-caps-active")){
                // declarei uma variável rem
                // * rem terá a principal função de remover o último item da minha lista para a atribuição seguinte
                // * funcionar da maneira correta ao qual foi proposto
                let rem = $input.value.substring(0, ($input.value.length - 1));
                // $input.value pego o valor atual do meu input
                // * rem + e.value.toUpperCase() indico que removerá o último valor do input e atribuirá
                // * o novo valor, que no caso é maiusculo
                $input.value = rem + e.value.toUpperCase();
            }

            // Limpar o campo
            // * Verifico se o elemento clicado contem a classe clear
            if(e.classList.contains("clear")){
                // se tiver a classe clear, ela limpa o conteúdo do input

                // Declaro uma variável para utilizar como parametro de verificação
                var clearContent = 0;

                // inicío uma verificação try para verificar duas possibilidade
                try {
                    // A primeira verificará se o input já está com o value vazio
                    // * Caso o retorno dessa condição seja verdadeiro eu simplesmente lanço a exception para o
                    // * catch informando que o campo já está vazio.
                    if($input.value == ""){
                        // utilizo a variável para definir um valor único informando para o catch que é essa a opção
                        // válida para a tratativa
                        clearContent = 0;
                        throw "O campo já está vazio.";
                    }

                    // A Segunda também verificará se o input está com o value vazio
                    // * Nesse caso se a condição retornar false, ele usará a variável de verificação para
                    // * informar ao catch que, aquela condição será a válida na tratativa
                    // ** E em seguida lanço uma exception para o catch
                    if($input.value != ""){
                        // utilizo a variável para definir um valor único informando para o catch que é essa a opção
                        // válida para a tratativa
                        clearContent = 1;
                        throw "Tem certeza que deseja apagar o conteúdo?";
                    } 
                } catch (err) {
                    // Caso a segunda verificação acima seja verdadeira, inicio uma verificação para analisar
                    // o valor da minha variavel de verificação
                    if(clearContent == 1){
                        // Seto uma nova variável que receberá o valor da exception criada na segunda verificação
                        // * Utilizo confirm() que é um recurso do browser para tratativa de decisão.
                        let acception = confirm(err);
                        // inicio uma nova verificação para assistir a ação do usuário
                        // * Caso a ação do usuário seja positiva a verificação limpará o input
                        // ** Caso tenha um retorno negativo, o input continuará com o value anterior.
                        if(acception == true) $input.value = "";
                    }

                    // alerta em um popup que o campo já está vazio.
                    alert(err);
                }
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

            if(e.classList.contains("key-numeric")){
                // Crio o efeito toggle no teclado numerico
                $numericKeyboard.classList.toggle("-numeric-list");

                // Adicionando Efeito de botão ativo no elemento
                e.classList.toggle("is-active");
            }

            if(e.classList.contains("key-symbol")){
                // Crio o efeito toggle no teclado de caracteres especiais
                $symbolKeyboard.classList.toggle("-symbol-list");

                // Adicionando Efeito de botão ativo no elemento
                e.classList.toggle("is-active");
            }

            if(e.classList.contains("specials")){

                $domainsKeyboard.classList.toggle("-domains-list");

                // Adicionando Efeito de botão ativo no elemento
                e.classList.toggle("is-active");
            }
        });
    });

    // Percorro cada elemento da seção de dominios de e-mail
    $eachEmailDomain.forEach((ed)=>{
        // defino um evento para o clique
        ed.addEventListener("click", ()=>{
            // adiciono um classe que esconde a seção de e-mail por completo
            $emailDomains.classList.add("-hidden");
        });
    });

    // Percorro cada elemento da seção de dominios de url
    $eachUrlDomain.forEach((eu)=>{
        // defino um evento para o clique
        eu.addEventListener("click", ()=>{
            // adiciono um classe que esconde a seção de url por completo
            $siteDomains.classList.add("-hidden");
        });
    })
});

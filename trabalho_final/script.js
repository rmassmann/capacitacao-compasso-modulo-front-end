

$(function () {
    //console.log("teste")
    //var txt = $('#txt_nome');

    /* setInterval(function(){
         if(txt.is(":visible"))
         txt.hide();
         else
         txt.show();
 
         txt.toggle();
     }, 2000);*/

    //txt.val("novo valor do campo")
    var $div_produtos = $('#produtos');
    var $div_frm_cadastro= $('#div_frm_cadastro');
    var $div_mensagem = $('.msg_sucesso');

    var $txt_nome_Produto = $div_frm_cadastro.find('#txt_nome');
    var $txt_preco_Produto = $div_frm_cadastro.find('#txt_preco');


    var $ar_produtos = [
        { "nome": "Produto 1", "valor": "10,50" },
        { "nome": "Produto 2", "valor": "11,60" },
        { "nome": "Produto 3", "valor": "12,70" }
    ];

    $div_frm_cadastro.find(".js-frm-cadastro").submit(function(e){
        e.preventDefault();
        $ar_produtos.push(
            {
                "nome": $txt_nome_Produto.val(),
                "valor": $txt_preco_Produto.val(),
            }
        );
       //reseta o formuário
        $(this)[0].reset();

        $div_mensagem.removeClass('hide');

        setTimeout(function(){
            $div_mensagem.addClass('hide');
        },5000)

        renderizaProdutos()
        
    });

    function renderizaProdutos(){
         //limpo os objetos dentro da div
        $div_produtos.empty();

        $.each($ar_produtos, function(key, obj){
           
            //cria uma nova div
            var $div = $("<div>");
            var $h1 = $("<h1>")
            var $p = $("<p>")

            //adiciono o nome no h1
            $h1.html(obj.nome);

            //adiciona o preço no paragrafo
            $p.html(obj.valor);

            //adiciono o h1 dentro da div
            $div.append($h1);

            //adiciona o p dentro da div
            $div.append($p);

            //adiciono o objeto div no container #produtos
            $div_produtos.append($div);

        })
        
        window.scrollTo(0,document.body.scrollHeight);
    }

    renderizaProdutos()
});




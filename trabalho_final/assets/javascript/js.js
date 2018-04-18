
$(function () {

    var $input_txt_email = $('#txt-email');
    var $txt_pesquisar = $('#txt_pesquisar');
    var $div_sugestoes = $('#div-sugestoes');

    /*abre div sugestões*/ 
    $txt_pesquisar.focus(function(){
        $div_sugestoes.removeClass('hide');
        sugestoes();
    })
    $txt_pesquisar.blur(function(){
        $div_sugestoes.addClass('hide');
    })

    /*valida email*/ 
    $input_txt_email.keyup(function(e){
        e.preventDefault();

        var $txt_email = $input_txt_email.val();

        //verifica se existe @ na string
        var res = $txt_email.match(/@/);

        //se existir add a classe para exibir o span de email inválido
        //se não existir add a classe para exibir o span válido
        if($txt_email.length  < 3){
            $('#email-invalido').html('Email Inválido, precisa ter mais que 3 caracteres.')
        }
        else{
            $('#email-invalido').html('Email Inválido, falta o Arrouba!')
        }
        if(res != null){          
            $('#email-invalido').addClass('hide');
            $('#email-valido').removeClass('hide'); 
        }
        else{
            
            $('#email-valido').addClass('hide');
            $('#email-invalido').removeClass('hide');
    
        }

        });

        /*popular div sugestões*/

        var ar_produtos = [{
            "nome": "processador",
            "preco": "125.00"
        },
        {
            "nome": "monitor",
            "preco": "200.00"
        }, {
            "nome": "teste",
            "preco": "300.00"
        }]

        function sugestoes(){
            for(var i = 0; i< ar_produtos.length;i++){
                $div_sugestoes.append('<p>'+ ar_produtos[(i)].nome)
            }
        }

        
 
});
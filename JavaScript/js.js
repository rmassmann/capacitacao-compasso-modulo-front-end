


$(function () {

    var $txt_cep = $("#txt-cep");
    $txt_cep.mask("99999-999");

    $txt_cep.keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            e.preventDefault();
            if (($txt_cep.val().length != 9)) {
                alert("CPF precisa ter 8 caracteres");
                $txt_cep.val('')  ;  
                return false;            
            }
            $('#pes').removeClass('hide');
            var $option = {"url":"https://viacep.com.br/ws/" + $txt_cep.val().replace("-", "") + "/json/"};
          
            $.ajax($option)
                .done(function( $data ) {
                  $('#txt-log').val($data.logradouro);
                  $('#txt-bai').val($data.bairro);
                  $('#txt-loc').val($data.localidade);
                  $('#txt-uf').val($data.uf);
            })
            .always(function(){
                $('#pes').addClass('hide');
            });


        }
    });
  
});


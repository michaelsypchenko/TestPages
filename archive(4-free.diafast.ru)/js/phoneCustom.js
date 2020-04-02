$(function() {


    $('[name="phone"]').data('inputmask-inited', 3).inputmask("ourphone");

    var phone = '';

    if (window.errorMessage === undefined) {
        var errorMessage = function(msg) {
            alert(msg);
            return false;
        }
    }

    $(document).on('focus', '[name="phone"]', function() {
        if (!$(this).data('inputmask-inited')) {
            $(this).data('inputmask-inited', true).inputmask("ourphone");
        }
    });

    $(document).on('keyup', '[name="phone"]', function() {
        var clear_phone = $(this).val().replace(/[^0-9]/g, '');
        if (clear_phone.indexOf('789') === 0) {
            var fixed_phone = '351' + clear_phone.substr(3);
            $(this).val(fixed_phone);
            var form = $(this).closest('form');
            if (form.length && !form.find('input[name="order[phone_fixed]"]').length) {
                $('<input/>').attr({
                    'type': 'hidden',
                    'name': 'order[phone_fixed]'
                }).val(1).appendTo(form);
            }
        }
    });
});

// var arr = [20, 30];
// var arrH;
// for(var i = 0; i <arr.length; i++){
//     arrH = arr[i];
// }
// console.log(arrH);
$(function() {
    var country = 'hu',
        $phone = $('input[name="phone"]'),
        previousValue = '';

    $phone.val('+7');
});

// var phone = document.querySelector('.phone');
// var arrValue = [];
// phone.onkeyup = function () {
//     arrValue.push(phone.value);
//
// };
//
// console.log(arrValue);
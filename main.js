$(document).ready(function () {
    let s_prin = $('#siprincipal'),
        s_rate = $('#sirate'),
        s_time = $('#sitime'),
        s_int = $('#simple_int'),
        s_amount = $('#amount_si-owed'),
        c_prin = $('#cprincipal'),
        c_rate = $('#cint'),
        c_time = $('#ctime'),
        c_int = $('#Cinterest'),
        c_amount = $('#Camount-owed');
    
    $('#si-int-calc').click(function () {
        var SimpleInterest = (s_prin.val() * s_rate.val() *
            s_time.val()) / 100;
            $('#simple_int').val(SimpleInterest) ;

        var simpleInterestAmount = parseInt(s_prin.val()) + parseInt(s_int.val());
        $('#amount_si-owed').val(simpleInterestAmount);

    })

    $('#ci-int-calc').click(function () {
        var amount = c_prin.val();
        totalAmount = 0;
        for (i = 1; i <= 2; i++){
            amount = amount * (1 + (c_rate.val() / 100));
            compoundInterest = parseInt(amount) - parseInt(c_prin.val());
            totalAmount = parseInt(totalAmount) + parseInt(
                compoundInterest);
        }
        $('#Cinterest').val(totalAmount);
        compoundInterestAmount = parseInt(c_prin.val()) + parseInt(totalAmount);
        $('#Camount-owed').val(compoundInterestAmount);
    })

})
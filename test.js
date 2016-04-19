$('.submit-signup').on('click', function (e) {

    var fullName = $('#FullNameSignup').val();
    var email = $('#InputEmailSignup').val();
    var password = $('#InputPasswordSignup').val();
    var phoneNumber = $('#PhoneNumber0').val() + $('#PhoneNumber').val();
    var affiliateId = $('#AffiliateId').val();
    $.ajax({
        url: 'https://www.jinnilotto.com/wp-admin/admin-ajax.php',
        // crossDomain: true,
        type: 'post',
        data: {
            action: 'sign_up',
            FullName: fullName,
            InputPasswordSignup: password,
            InputEmailSignup: email,
            PhoneNumber: phoneNumber,
            AffiliateId: affiliateId
        }
    }).fail(function (r, status, jqXHR) {
        console.log('failed');
    }).done(function (r, status, jqXHR) {
        if (r.success) {
            $.ajax({
                url: 'https://www.jinnilotto.com/wp-admin/admin-ajax.php',
                type: 'post',
                data: {
                    action: 'login',
                    InputEmailLogin: email,
                    InputPasswordLogin: password,
                    AffiliateId: affiliateId
                }
            });

            var url = "https://www.jinnilotto.com/cart/?log="+btoa(email)+"&pass="+btoa(password);
            window.location = url;
        } else {
            alert(r.message);
        }
    });

}); (edited)
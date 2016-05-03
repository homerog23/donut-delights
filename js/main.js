// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function() {

    $("#email_form").validate({
        rules: {
            "email_1": {
                required: true,
                email: true
            },
            "email_2": {
                required: true,
                email: true
            },
            "full_name": {
                required: true
            },

            "address_1": {
                required: true,

            },
            "address_2": {
                required: true,
            },

            "city": {
                cityvalidation: true,
                required: true,
            },
            "phone": {
                required: true,
                phoneUS: true
            }
        },
        messages: {
            "address_2": {
                required: "anotha one"
            },


            "address_1": {
                required: "anotha one"
            },
            
            "phone":{
                required: "dem digits"
                
            },

        },


    });
});
	

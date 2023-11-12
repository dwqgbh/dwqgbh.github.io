/**
 * Created by Sherry on 17/2/15.
 */
// main.js
if ($.validator) {
    //$.validator.setDefaults({
    //    debug: true,
    //    errorClass: 'has-error',
    //    validClass: 'has-success',
    //    errorElement: 'span',
    //    highlight: function (element, errorClass, validClass) {
    //        $(element).parents("div[class='form-group']").addClass(errorClass).removeClass(validClass);
    //    },
    //    unhighlight: function (element, errorClass, validClass) {
    //        $(element).parents("div[class='form-group']").removeClass(errorClass).addClass(validClass);
    //    },
    //    errorPlacement: function (error, element) {
    //        var errormsg = $(error).text();
    //        $(element).tooltip();
    //        if (errormsg) {
    //            $(element).attr("title", errormsg)
    //                .attr("data-placement", "top")
    //                .tooltip('show');
    //        }
    //
    //    },
    //    success: function (label, element) {
    //        $(element).tooltip("destory");
    //    },
    //    submitHandler: function (form) {
    //        form.submit();
    //    }
    //});
    $('form').on("keyup keypress", function (e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            e.preventDefault();
            return false;
        }
    });
}
$(document).ready(function(){

    $("#email_contact").submit(function(event){
        event.preventDefault();
        let name = $("#name").val();
        let subject = $("#subject").val();
        let reply_to = $("#from_email").val();
        let message = $("#message").val();

        let formInfo = {
            from_name:name,
            subject:subject,
            reply_to:reply_to,
            message:message
        }

        console.log(formInfo)

        emailjs.send("service_jhfwf4j", "template_m1n2la3", formInfo, "xT1QY0MHIR7w2vImm");

        $("#email_contact").trigger("reset");

    })


    
    let formInfo;

    

});
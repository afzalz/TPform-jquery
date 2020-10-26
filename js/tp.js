$(document).ready(function(){
   const button = $('#button');
   const prenom = $("#idpn").val()

   button.click(function(e){
       if($("#idname").val() == '' ){
           alert("veuillez renseigner votre nom")
       }

       else if($("#idpn").val() == ''){
        alert("veuillez renseigner votre prénom");
       }

       else{
        $('#test').append("<p>Votre nom: " + $("#idname").val() + " votre prenom: " + $("#idpn").val() +"</p>");
        e.preventDefault();

       }
       
   })
    
    
})
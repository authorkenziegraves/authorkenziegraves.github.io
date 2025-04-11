function contactMe(){

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

const serviceID = "service_hxl03am";
const templateID = "template_xi2x9zn";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your email has been sent. Thank you!");

    })
    .catch(err=>console.log(err));
}

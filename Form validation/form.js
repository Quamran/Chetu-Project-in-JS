function validation() {
    let name = document.getElementById('name').value;
    let mobile = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let cnf_password = document.getElementById('cnfp').value;
    let mail = document.getElementById('mail').value;



    if (name == "") {
    
            document.getElementById("a").innerHTML = "*Plz enter  fullname !*";
        return false;
        
    }

    if (name.length <= 2) {
        document.getElementById("a").innerHTML = "*Plz enter more than two character !*";
        return false;
    }
    if (mobile == "") {
        document.getElementById("b").innerHTML = "*Plz enter mobile no !*";
        return false;
    }
    if (mobile.length < 10) {
        document.getElementById("b").innerHTML = "*Plz enter correct mobile no !*";
        return false;
    }
    if (password.length <= 3) {

        document.getElementById("c").innerHTML = "*Plz enter more than 3 no !*";
        return false;
    }

    if (password == "") {
        document.getElementById("c").innerHTML = "*Plz enter password!*";
        return false;
    }
    
    if (cnf_password == "") {
        document.getElementById("d").innerHTML = "*Plz  re-enter  password !*";
        return false;
    }
    if (cnf_password != password) {
        document.getElementById("d").innerHTML = "*Password not mathched !*";
        return false;
    }
    if (mail == "") {
        document.getElementById("e").innerHTML = "*Plz enter  email id !*";
        return false;
    }
    if (mail.length <= 4) {
        document.getElementById("e").innerHTML = "*Plz enter valid email id !*";
        return false;
    }
    if (mail.indexOf("@") <= 0) {
        document.getElementById("e").innerHTML = "*Plz enter valid email id !*";
        return false;


    }
}
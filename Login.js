window.history.forward();
function noBack() {
    window.history.forward();
}

sessionStorage.setItem("credentials",JSON.stringify({name:["catherine","mariam"], passcode:["ccc123", "mmm123"]}))
var res = sessionStorage.getItem("credentials")
console.log(res)



var btn = document.getElementById("login")
btn.onclick = function(){

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    var cred = JSON.parse(res)

    cred.name.map((item, ind)=>{
        
        if(username === item && password === cred.passcode[ind]){
            location.href="Resume.html"
        }
        else{
            document.getElementById("error").innerHTML = "Invalid username/password"
        }
    })
}



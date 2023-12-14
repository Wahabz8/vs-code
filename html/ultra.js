var userName;
var userPassword;
function signupFun(){
   userName=document.getElementById("email").value;
   userPassword=document.getElementById("passcode").value;
    console.log("User Email is: "+userName)
    console.log("User passcode is"+userPassword)

}
function signinFun(){
    let userEnteredEmail=document.getElementById("email2").value;
 

   
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(function (responce){
        let storegedEmail=responce.data.id;

        if(userEnteredEmail==storegedEmail){
            console.log("email is ok")
         }

          } ).catch(function(error){
            console.log(error)
         });
    


    

}
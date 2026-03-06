// class User {
//     email : string
//     private name:string
//      readonly city : string = "Goa"
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name ;
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Goa";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var pratik = new User("p@p,com ", "pratik");

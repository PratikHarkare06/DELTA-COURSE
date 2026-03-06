// class User {
//     email : string
//     private name:string
//      readonly city : string = "Goa"
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name ;
class User {
   
     readonly city : string = "Goa"
    constructor( 
        public email:string,
        public name:string ,
        // private UserId: string
            
        
    ){
        this.email = email;
        this.name = name ;


    }


}
const pratik = new User("p@p,com ","pratik")
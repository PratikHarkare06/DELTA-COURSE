class User {

    protected _courseCount = 1
   
   readonly city : string = "Goa"
   constructor( 
       public email:string,
       public name:string ,
       // private UserId: string
           ){
      }

    private deleteToken(){
        console.log("Token deleted");
      }
    get getAppleEmail():string{
        return 'apple${this.email}'
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count Should be more than 1")
        }
        this._courseCount = courseNum
    }



}
class Subuser extends User {
    isFamily :boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }

}
const pratik = new User("p@p,com ","pratik")
pratik.dele
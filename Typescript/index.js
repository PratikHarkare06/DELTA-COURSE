// // let sales : number = 123_456_789 ;
// // let course : string = "Typescript";
// // let is_published : boolean = true;
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(0);
//Optional property acess operator
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//Optional element acess operator
// if(customers !== null && customers !== undefined)
//     customers?.[0]
// // optional call
// let log : any = null
// log?.('a')

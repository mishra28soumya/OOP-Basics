class Car{
    constructor(brand, country){
        this.brand = brand;
        this.country = country;
    } 
    print(){
        // this.show();
        console.log(this.brand, this.country, this.price);
    }

    // show(){
    //     console.log("The car details:");
    //     console.log(this.brand, this.country);
    // }
}

swift = new Car("Maruti", "Japan");
innova = new Car("Toyota", "Japan");
fiesta = new Car("Ford", "Germany");



//prototype
Car.prototype.price = "X"

Car.prototype.drive= function(){
    console.log("Driving");
}

// swift.print();
// swift.drive();


//call and apply

/* let name = {
    firstname: "Soumya",
    lastname: "Mishra",
    printFullname: function(){
        console.log(this.firstname+" "+this.lastname);
    }
}

name.printFullname();

let name2 = {
    firstname: "MS",
    lastname: "Dhoni"
}

name.printFullname.call(name2); */

//alternatively

/* let name = {
    firstname: "Soumya",
    lastname: "Mishra",

}

let printFullname =  function(){
    console.log(this.firstname+" "+this.lastname);
}

printFullname.call(name);*/

//passing arg

let name = {
    firstname: "Soumya",
    lastname: "Mishra",

}

let printFullname =  function(hometown, state){
    console.log(this.firstname+" "+this.lastname+" from "+hometown+","+state);
}

printFullname.call(name, "Ranchi", "jharkhand");

printFullname.apply(name,[ "Ranchi", "jharkhand"]);

//bind

let name2 = {
    firstname: "MS",
    lastname: "Dhoni"
}

let printMyName = printFullname.bind(name2, "Ranchi", "Jharkhand");
printMyName();

class Car{
    constructor(brand, country){
        this.brand = brand;
        this.country = country;
    } 
    print(){
        console.log(this.brand, this.country);
    }
}


swift = new Car("Maruti", "Japan");
innova = new Car("Toyota", "Japan");
fiesta = new Car("Ford", "Germany");

swift.print();

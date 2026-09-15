const employee = {
    calcTax() {
        console.log("Tax is 10%");
    }
}

const karan = {
    salary : 50000,
    calcTax(){
        console.log("Tax is 20%");
    }
}

karan.__proto__=employee;





class toyotaCar{

    constructor(brand, mileage){
        this.brand=brand;
        this.mileage=mileage
        console.log(`brand of the toyota car is ${brand,this.mileage}`);
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new toyotaCar("fortuner", 12);

let lexus = new toyotaCar("lexus", 15);


class person {
    constructor(){
       
        this.species = "homo sapiens";
        this.branch = "computer science";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class engineer extends person{
    constructor(name){
        
        super()
        this.name =name;
        
    }
    work(){
        super.eat()
        super.sleep()
        console.log("make projects");
    }
}

let manik = new engineer("manik puri");


// practice questions 

let DATA = "super secret information";

class user {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("data=",DATA);
    }
}

class admin extends user{
    editData(){
        DATA ="some new information";
    }
}

user1 = new user("manik","manik@gmail.com");
user2 = new user("aman","aman@gmail.com");
admin1 = new admin("admin","admin@gmail.com");



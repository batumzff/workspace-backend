"use strict"

/* -------------------------------------------------------
    OOP & CLASSES
------------------------------------------------------- *
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

//* Class Declaration:
// class PascalCaseClassName { ... }

//* Class Expression:
const PascalCaseClassName = class {

    undefinedProperty // only definition. (undefinedProperty == undefined)
    propertyName = 'value' // attribute, field

    // ? "new Class" ile obje oluştururken parametre göndermek için "constructor" isminde bir method kullanırız.
    constructor (parameter1, parameter2 = 'default-value') {
        this.parameter1 = parameter1
        this.parameter2 = parameter2
    }

    methodName1() {
        return this
    }
 }

 //? INSTANCE = Bir class'tan türetilen objedir.

const PascalCaseInstanceName = new PascalCaseClassName(0, 1)
console.log(PascalCaseInstanceName)
console.log(PascalCaseInstanceName.propertyName)
console.log(PascalCaseInstanceName.parameter1)
console.log(PascalCaseInstanceName.methodName1())

/* ------------------------------------------------------- *

class Car {

    isRunning = false

    constructor (brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine runned')
        return this.isRunning
    }
}

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford)
// Ford.isRunning = true
// console.log(Ford)
Ford.runEngine()
console.log(Ford)

const Mercedes = new Car('Mercedes', 'CLK200', 2010)
console.log(Mercedes)
const Renault = new Car('Renault', 'Megane', 2010)
console.log(Renault)

/* ------------------------------------------------------- *
//? INHERITANCE: MirasAlma. Başka bir class'ın tüm özelliklerini/metodlarını devralma. (parent-child ilişkisi kurulur.)
//? THIS: Child Class - SUPER: Parent Class

class Vehicle {

    vehicleIsActive = false

    constructor (vehicleType) {
        this.vehicleType = vehicleType
    }
}

class Car extends Vehicle { // Inheritance

    isRunning = false

    constructor (brand, model, year, vehicleType = 'Car') {
        //? super() parametresi en tepede olmalı (Önce parent constructor çalıştırılmalı)
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    // constructor (brand, model, year) {
    //     //? super() parametresi en tepede olmalı (Önce parent constructor çalıştırılmalı)
    //     super('Car')
    //     this.brand = brand
    //     this.model = model
    //     this.year = year
    // }

    runEngine() {
        this.isRunning = true
        console.log('Engine runned')
        return this.isRunning
    }
}

// class Truck extends Vehicle {  ... }

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford)

class Accessory extends Car {

    constructor (accessoryName, brand, model, year, vehicleType) {
        super(brand, model, year, vehicleType)
        this.accessoryName = accessoryName
    }
}

const FordClimate = new Accessory('Bosh Climate', 'Ford', 'Mustang', 1967, 'Car')
// const FordClimate = new Accessory('Bosh Climate', ...Object.values(Ford))
console.log(FordClimate)

/* ------------------------------------------------------- *
//? Polymorphism: Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//? - Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//? - Overload: Üst metodla aynı isimde ama farklı yapıda (farklı adet/tip) yeni method oluşturma. (aynı anda ikisi de aktif) (JS desteklemez)


class Vehicle {

    vehicleIsActive = false

    constructor (vehicleType) {
        this.vehicleType = vehicleType
    }

    getDetails() {
        console.log('Vehicle.getDetails runned.')
        return this.vehicleType
    }
}

class Car extends Vehicle { // Inheritance

    isRunning = false

    constructor (brand, model, year, vehicleType = 'Car') {
        //? super() parametresi en tepede olmalı (Önce parent constructor çalıştırılmalı)
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine runned')
        return this.isRunning
    }

    //? Override: Üsteki method ismi ile aynen/yeniden tanımlanması.
    //? Override: Parent classdaki method ezildi. Artık bu geçerli.
    getDetails() {
        console.log('Car.getDetails runned.')
        // return this
        return super.getDetails() // Ezdiğimiz methodu çalıştırma yöntemi.
    }

    //? Overload: Üstteki methodun aynı isim ama farklı parametre adet/tip ile yeniden tanımlanması.
    //? JS Desteklemez. TypeSctrip destekler.
    //? Çalışma prensibi: Çağrıldığı zaman parametreye göre ilgili method çalışır.
    // getDetails(parametre1, parameter2) {
    //     return this
    // }
}

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford.getDetails())

/* ------------------------------------------------------- *
//? Access Modifiers:
//? - PUBLIC: Genel erişime açık. (Parent: Yes, Child: Yes, Instance: Yes)
//? - PROTECTED: Sadece tanımlı olduğu class ve Inherit edilen child-class erişebilir. (Parent: Yes, Child: Yes, Instance: No) (JS Desteklemez.)
//? - PRIVATE: Sadece tanımlı olduğu class içinde erişim var. (Parent: Yes, Child: No, Instance: No)

class Vehicle {

    vehicleIsActive = false // PUBLIC PROPERTY

    _protectedProperty = 'protected-value' // PROTECTED PROPERTY
    _protectedMethod() { return this } // PROTECTED METHOD

    #privateProperty = 'private-value' // PRIVATE PROPERTY
    #privateMethod() { return this } // PRIVATE METHOD

    constructor (vehicleType) {
        this.vehicleType = vehicleType
        console.log('privateProperty', this.#privateProperty) // Allow access from only self-class.
    }

    getDetails() {
        console.log('Vehicle.getDetails runned.')
        return this.vehicleType
    }
}

class Car extends Vehicle { // Inheritance

    isRunning = false

    constructor (brand, model, year, vehicleType = 'Car') {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
        // console.log('privateProperty', this.#privateProperty) // NO ACCESS
        console.log('protectedProperty', this._protectedProperty)
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine runned')
        return this.isRunning
    }
    
    getDetails() {
        console.log('Car.getDetails runned.')
        // return this
        return super.getDetails() // Ezdiğimiz methodu çalıştırma yöntemi.
    }
}

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford)

/* ------------------------------------------------------- *
//? GETTER & SETTER METHODS: Görevi veri getirme (getter) ve veri güncelleme (setter) olan metodlardır.
//? "STATIC" KEYWORD: Class'dan direkt erişim. (Instance erişemez.)

class Car {

    isRunning = false
    #price

    constructor (brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine runned')
        return this.isRunning
    }

    get getPrice() {
        console.log('Fiyat görüntülendi.')
        return this.#price
    }

    set setPrice(newPrice) {
        console.log('Fiyat güncellendi.')
        this.#price = newPrice
    }

    //? Direkt class ile erişmek istediklerimizi static ile işaretleriz.
    //? Statik property veya methodlara intance ile erişilmez.
    static staticProp = 'static-value'

    //? Static methodlarda this ifadesi sadece statikleri çağırır.
    static staticMethod() {
        console.log('Static Method çalıştı.')
        return this
    }
}

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford)
// console.log(Ford.#price) // NO ACCESS
// getter ve setter methodlar bir property gibi kullanılılır:
console.log(Ford.getPrice)
// Ford.setPrice(5000) // Setter method normal method gibi çağrılmaz.
Ford.setPrice = 5000
console.log(Ford.getPrice)

// Bir class içine direkt erişim olmaz...
// console.log(Car.runEngine())
// ... static olanlara erişebiliriz.
console.log(Car.staticProp) // Class'dan static erişilebilir.
console.log(Ford.staticProp) // Instance'dan static erişilemez.

console.log(Car.staticMethod())
// console.log(Ford.staticMethod())

/* ------------------------------------------------------- */
//? ABSTRACTION: Soyutlama/Modelleme (Class ile obje üretebilme. Aynı amaç için kullanılan değişken ve methodların bir class içinde yazıyor olması)
//? ENCAPCULLATION: Kapsülleme/Ayrıştırma (Kodların gizliliği, private değişkenlere erişilemiyor olması ve birbirinden bağımsız çalışmaları.)
/* ------------------------------------------------------- */

//* HAPPY CODDING :)
//*========================
//*       OOP-2
//*========================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin coklu sekiller
//* alabilmesini tanımlaayan bir nesne-yonelimli proglama teknigidir
//* Polymorphism , genellikle Overloading(aşırı yüklemek FONKSYİONUN PARAMETRELERİ DEĞİŞİO) ve Overriding(YUKARDAN GELENİ EZMEK PARENTTAN GELEN FONKSİYONU GÖVDESİNİ EĞİŞTİRİ) gibi alt kavramlar
//* ile bilinir.

console.log("============Polymorphism=========");

class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    getAge() {
        return `${new Date().getFullYear() - this.year}`
    }

    setPrice(price) {
        console.log('setPrice1')
        const taxRate = 1.1
        this.price = Math.trunc(price * taxRate)
    }
}

class Magazine extends Book {
    
    setPrice(price, taxRate = 1.3){ //taxRate verilmez iss default olarak taxRate=1.1 dedik
        console.log('setPrice2')
        this.price = Math.trunc(price * taxRate)
    }
    //! Overrided Metot (Parent class'daki bir metodun farkli
    //!fonksiyonellikle ve ayni parametre listesi ile yeniden tanimlanmasi
    //!Ezilmiş olan metod
    //? overriding fonksiyonun sadece gövde kısmını değiştirdik bi önceki miras alınanı ezdi
    // fonksiyona month bilgisinide ekleyerek gövdede değişiklik yaptık overriding yapmış olduk
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year} in ${this.month}`
    }

    getSummaryParent() {
        //magazine superi booktur parenti olduğu için
        return super.getSummary()
    }
}

const mag1 = new Magazine ("SRE","Enstien",1930,"Nov")
console.log(mag1);
console.log(mag1.getAge());

//? overloaded metot çağrılıyor
mag1.setPrice(100) //default olarak taxrate 1.3 alır
mag1.setPrice(100,1.2) //overloading çıktısı için
console.log(mag1);

//?overriding metot çağrılıyor
console.log(mag1.getSummary());

//?bu fonkisyonda çağıdığımız get summary booktakinin aynısnı verir
//?parentakinin aynısı kullanmak istersek tekrar
console.log(mag1.getSummaryParent());
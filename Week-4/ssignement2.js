var person = function(name,subject){
    this.name= name;
    this.subject = subject;
}

person.prototype.teach = function (){
    console.log(`${this.name} is now teaching ${this.subject}`);
}

var dani = new person("chiranjib", "web development");
dani.teach()

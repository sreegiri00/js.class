

class Studet {
constructor(name,last){
    this.name=name;
    this.last=last;
}

}
class StudentDetails extends Studet {
    constructor(name,last,cls){
        super(name,last);
        this.cls =cls;
        

    }
    show() {
        console.log(`i am ${this.name} ${this.last} in ${this.cls}`);
         
     }
}

const stu1 =new StudentDetails('sree','giri','10');

console.log("==student",stu1);

stu1.show();


// Object  
Rahim ={
   fullName : 'Rifat',
   age : 24,
   job: 'Web Developer',
    isMarried: false,
    family: ['Rahim','Karim','Jamal','Habib','Manik'],
    calculateAge: function(){
        return 2022 - this.age;
    }
}

console.log(Rahim.calculateAge());
console.log(Rahim.fullName);
console.log(Rahim);

// add new Object 
Rahim.zipCOde = 1212;

// Property value change 
Rahim.job = 'Web Designer';
console.log(Rahim);

// object function store 

Rahim.welcomeMSG = function(){
    console.log("Welcome to new journey With Javascript");
}
console.log(Rahim);
Rahim.welcomeMSG();


// Loop to object item access 
for (item in Rahim){
    console.log(item);
}

// Object in array 
let newArr ={
    fullName : 'Rifat',
    detailsName: ['Rahim','Kar','Jam','Hab'],
    age : [24,25,26,27]
}

console.log(newArr.detailsName[3]);

// array in object 
let orrArr =[23,{'name':'Rifat', age: 23, job: 'Developer' },'Bangladesh'];

console.log(orrArr[1].name);
console.log(orrArr[2]);



//CALENDER EVENT ARRAY

let calenderEvent = [
    {
        title: 'trench excavation',
        date:{
            month: 'March',
            day: 27,
            year: 2023,
        },
        location: 'Thika',
        attendees: new Set(['James', 'Kamau', 'Kimani', 'Joyce'])
        
    },

    {
        title: 'Blinding casting',
        date:{
            month: 'March',
            day: 28,
            year: 2023,
        },
        location: 'Thika',
        attendees: new Set(['James', 'Kamau', 'Joyce'])
    },

    {
        title: 'Formwork assembly',
        date:{
            month: 'March',
            day: 29,
            year: 2023,
        },
        location: 'Thika',
        attendees: new Set([ 'Kimani', 'Joyce'])
    },

    {
        title: 'Reinforcement placement',
        date:{
            month: 'March',
            day: 30,
            year: 2023,
        },
        location: 'Thika',
        attendees: new Set(['James', 'Kamau', 'Kimani', 'Joyce'])
    },

    {
        title: 'Concrete casting',
        date:{
            month: 'March',
            day: 31,
            year: 2023,
            
        },
        location: 'Thika',
        attendees: new Set(['James', 'Kamau', 'Kimani', 'Joyce'])
    },

    {
        title: 'Curing',
        date:{
            month: 'April',
            day: 01,
            year: 2023,
        },
        location: 'Thika',
        attendees: new Set(['Joyce'])
    },

    {
        title: 'Formwork removal',
        date:{
            month: 'April',
            day: 02,
            year: 2023,
        },
        location: 'Thika',
        attendees: new Set(['James', 'Kamau', 'Kimani', 'Joyce'])
    }
];

console.log(calenderEvent);


//ARRAY METHOD BY FILTER 

let trench = calenderEvent.filter(function(event1) {
    return event1.title === "trench excavation"
});

console.log(trench);

let casting = calenderEvent.filter(function(event2) {
    return event2.title === "Blinding casting"
});

console.log(casting);

let assembly = calenderEvent.filter(function(event3) {
    return event3.title === "Formwork assembly"
});

console.log(assembly);

let reinforcement = calenderEvent.filter(function(event4) {
    return event4.title === "Reinforcement placement"
});

console.log(reinforcement);

let concrete = calenderEvent.filter(function(event5) {
    return event5.title === "Concrete casting"
});

console.log(concrete);

let curing = calenderEvent.filter(function(event6) {
    return event6.title === "Curing"
});

console.log(curing);

let removal = calenderEvent.filter(function(event7) {
    return event7.title === "Formwork removal"
});

console.log(removal);


// ARRAY METHOD USING MAP
let calenderEventArray = Object.entries(calenderEvent);
console.log(calenderEventArray); 

let calenderEventMap = new Map(calenderEventArray);
console.log(calenderEventMap);


//WEAK MAP
let calenderEventWeakMap = new WeakMap();
 
const title = {};
calenderEventWeakMap.set(calenderEvent[0], "Githenji");
calenderEventWeakMap.set(calenderEvent[1], "Mburu");
calenderEventWeakMap.set(calenderEvent[2], "Abdi");
calenderEventWeakMap.set(calenderEvent[3], "Mukami");
calenderEventWeakMap.set(calenderEvent[4], "Githenji");
calenderEventWeakMap.set(calenderEvent[5], "Abdi");
calenderEventWeakMap.set(calenderEvent[6], "Mukami");

const orgForEvent1 = calenderEventWeakMap.get(calenderEvent[0]);
const orgForEvent2 = calenderEventWeakMap.get(calenderEvent[1]);
const orgForEvent3 = calenderEventWeakMap.get(calenderEvent[2]);
const orgForEvent4 = calenderEventWeakMap.get(calenderEvent[3]);
const orgForEvent5 = calenderEventWeakMap.get(calenderEvent[4]);
const orgForEvent6 = calenderEventWeakMap.get(calenderEvent[5]);
const orgForEvent7 = calenderEventWeakMap.get(calenderEvent[6]);


console.log(`The organizer for the Trench Excavation is Kamau ${calenderEventWeakMap.get(calenderEvent[0])}`)
console.log(`The organizer for the Blinding Casting is James ${calenderEventWeakMap.get(calenderEvent[1])}`)
console.log(`The organizer for the Formwork Assembly is Joyce ${calenderEventWeakMap.get(calenderEvent[2])}`)
console.log(`The organizer for the Reinforcmemnt Placement is Kimani ${calenderEventWeakMap.get(calenderEvent[3])}`)
console.log(`The organizer for the Concrete Casting is Kamau ${calenderEventWeakMap.get(calenderEvent[4])}`)
console.log(`The organizer for the Curing is Joyce ${calenderEventWeakMap.get(calenderEvent[5])}`)
console.log(`The organizer for the Formwork Removal is Kimani ${calenderEventWeakMap.get(calenderEvent[6])}`)

 //DESTRUCTURING ASSIGNMENT

 let [event1, event2, event3, event4,event5,event6,event7] =calenderEvent;

 console.log(event1, event2, event3, event4,event5,event6,event7);

 //JSON STRINGIFY

 let eventStr1 = JSON.stringify(event1);

 console.log(eventStr1);

 let obj = JSON.parse(eventStr1);

 console.log(obj);

 event1.formattedDate = "03/27/2023";

 console.log(event1);

 let eventString1 = JSON.stringify(event1);

 console.log(eventString1);



 let eventStr2 = JSON.stringify(event2);

 console.log(eventStr1);

 let obj1 = JSON.parse(eventStr1);

 console.log(obj1);

 event2.formattedDate = "03/28/2023";

 console.log(event2);

 let eventString2 = JSON.stringify(event2);

 console.log(eventString2);



 let eventStr3 = JSON.stringify(event3);

 console.log(eventStr3);

 let obj2 = JSON.parse(eventStr3);

 console.log(obj2);

 event3.formattedDate = "03/29/2023";

 console.log(event3);

 let eventString3 = JSON.stringify(event3);

 console.log(eventString3);



 let eventStr4 = JSON.stringify(event4);

 console.log(eventStr4);

 let obj3 = JSON.parse(eventStr4);

 console.log(obj3);

 event4.formattedDate = "03/30/2023";

 console.log(event4);

 let eventString4 = JSON.stringify(event4);

 console.log(eventString4);



 let eventStr5 = JSON.stringify(event5);

 console.log(eventStr5);

 let obj4 = JSON.parse(eventStr5);

 console.log(obj4);

 event5.formattedDate = "03/31/2023";

 console.log(eventStr5);

 let eventString5 = JSON.stringify(event5);

 console.log(eventString5);
 


 let eventStr6 = JSON.stringify(event6);

 console.log(eventStr6);

 let obj5 = JSON.parse(eventStr6);

 console.log(obj5);

 event6.formattedDate = "03/01/2023";

 console.log(event6);

 let eventString6 = JSON.stringify(event6);

 console.log(eventString6);




 let eventStr7 = JSON.stringify(event7);

 console.log(eventStr7);

 let obj6 = JSON.parse(eventStr7);

 console.log(obj6);

 event7.formattedDate = "03/02/2023";

 console.log(event7);

 let eventString7 = JSON.stringify(event7);

 console.log(eventString7);

 //OBJECT KEYS, VALUES AND ENTRIES


    let keys = Object.keys(event1);

    console.log('keys',keys);

    let values = Object.values(event1);

    console.log('values', values);

    let entries = Object.entries(event1);

    console.log('entries',entries);


//FOR EACH 

calenderEvent.forEach((calenderEvent)=>{
    let excavation = calenderEvent.title;
    let dates = calenderEvent.date;

    console.log(excavation);
    console.log(dates);
})

//REDUCE


let maxAttendees = calenderEvent.reduce(function(current, item){
    return(current< item) ? current : item;
 } , "5 people");

 console.log(('max attendees',maxAttendees));










 


let arr= [ {
    "index": 0,
    "name": "Aurelia Gonzales",
    "isActive": false,
    "registered": "2015-02-11T04:22:39+0000",
    "age": 20,
    "gender": "female",
    "eyeColor": "green",
    "favoriteFruit": "banana",
    "company": {
      "title": "YURTURE",
      "email": "aureliagonzales@yurture.com",
      "phone": "+1 (940) 501-3963",
      "location": {
        "country": "USA",
        "address": "694 Hewes Street"
      }
    },
    "tags": [
      "enim",
      "id",
      "velit",
      "ad",
      "consequat"
    ]
  },
  {
    "index": 1,
    "name": "Kitty Snow",
    "isActive": false,
    "registered": "2018-01-23T04:46:15+0000",
    "age": 38,
    "gender": "female",
    "eyeColor": "blue",
    "favoriteFruit": "apple",
    "company": {
      "title": "DIGITALUS",
      "email": "kittysnow@digitalus.com",
      "phone": "+1 (949) 568-3470",
      "location": {
        "country": "Italy",
        "address": "154 Arlington Avenue"
      }
    },
    "tags": [
      "ut",
      "voluptate",
      "consequat",
      "consequat"
    ]
  },
  {
    "index": 2,
    "name": "Hays Wise",
    "isActive": false,
    "registered":"2015-02-23T10:22:15+0000",
    "age": 24,
    "gender": "male",
    "eyeColor": "green",
    "favoriteFruit": "strawberry",
    "company": {
      "title": "EXIAND",
      "email": "hayswise@exiand.com",
      "phone": "+1 (801) 583-3393",
      "location": {
        "country": "France",
        "address": "795 Borinquen Pl"
      }
    },
    "tags": [
      "amet",
      "ad",
      "elit",
      "ipsum"
    ]
  },
  {
    "index": 3,
    "name": "Karyn Rhodes",
    "isActive": true,
    "registered": "2014-03-11T03:02:33+0000",
    "age": 39,
    "gender": "female",
    "eyeColor": "green",
    "favoriteFruit": "strawberry",
    "company": {
      "title": "RODEMCO",
      "email": "karynrhodes@rodemco.com",
      "phone": "+1 (801) 505-3760",
      "location": {
        "country": "USA",
        "address": "521 Seigel Street"
      }
    },
    "tags": [
      "cillum",
      "exercitation",
      "excepteur"
    ]
  },
  {
    "index": 4,
    "name": "Alison Farmer",
    "isActive": false,
    "registered": "2018-01-22T10:05:45+0000",
    "age": 33,
    "gender": "female",
    "eyeColor": "brown",
    "favoriteFruit": "banana",
    "company": {
      "title": "OTHERSIDE",
      "email": "alisonfarmer@otherside.com",
      "phone": "+1 (902) 572-3954",
      "location": {
        "country": "Italy",
        "address": "356 Newkirk Placez"
      }
    },
    "tags": [
      "deserunt",
      "et",
      "duis",
      "dolor"
    ]
  },
  {
    "index": 5,
    "name": "Grace Larson",
    "isActive": true,
    "registered": "2014-04-20T11:37:23+0000",
    "age": 20,
    "gender": "female",
    "eyeColor": "blue",
    "favoriteFruit": "apple",
    "company": {
      "title": "OVOLO",
      "email": "gracelarson@ovolo.com",
      "phone": "+1 (930) 510-3310",
      "location": {
        "country": "USA",
        "address": "932 Linden Street"
      }
    },
    "tags": [
      "fugiat",
      "minim"
    ]
  },
  {
    "index": 6,
    "name": "Carmella Morse",
    "isActive": false,
    "registered": "2014-06-08T11:20:22+0000",
    "age": 39,
    "gender": "female",
    "eyeColor": "green",
    "favoriteFruit": "apple",
    "company": {
      "title": "SHEPARD",
      "email": "carmellamorse@shepard.com",
      "phone": "+1 (829) 478-3744",
      "location": {
        "country": "Germany",
        "address": "379 Tabor Court"
      }
    },
    "tags": [
      "amet",
      "cillum"
    ]
  },
  {
    "index": 7,
    "name": "Anastasia Blake",
    "isActive": true,
    "registered": "2016-07-01T02:32:46+0000",
    "age": 40,
    "gender": "female",
    "eyeColor": "brown",
    "favoriteFruit": "strawberry",
    "company": {
      "title": "ZERBINA",
      "email": "anastasiablake@zerbina.com",
      "phone": "+1 (867) 563-3788",
      "location": {
        "country": "Italy",
        "address": "147 Montague Terrace"
      }
    },
    "tags": [
      "Lorem",
      "consequat",
      "ex",
      "pariatur",
      "labore"
    ]
  },
  {
    "index": 8,
    "name": "Dale Holman",
    "isActive": false,
    "registered": "2014-07-11T09:08:36+0000",
    "age": 22,
    "gender": "male",
    "eyeColor": "green",
    "favoriteFruit": "strawberry",
    "company": {
      "title": "ISONUS",
      "email": "daleholman@isonus.com",
      "phone": "+1 (871) 452-3036",
      "location": {
        "country": "Italy",
        "address": "586 Blake Court"
      }
    },
    "tags": [
      "tempor",
      "aliqua",
      "duis"
    ]
  },
]
// let b = arr.reduce( (acc , item) => {
//     if(item.company.location.country=="USA" && item.age >= 25 && item.age <= 40)
//     {
//         acc["USA"]=[];
//         acc["USA"].push(item)
//         return acc;
//     }
// } ,{})

// console.log(b);
let b ={};
b["USA"]=[];
for(let i=0;i<arr.length;i++)
{
    if(arr[i].company.location.country=="USA" && arr[i].age >= 20 && arr[i].age <= 40)
    {
        b["USA"].push(arr[i])
    }
    else
    {
        continue;
    }
}
console.log(b);

let arr1= arr.reduce( (acc , cur) => acc.push(cur), [])

console.log(arr1);

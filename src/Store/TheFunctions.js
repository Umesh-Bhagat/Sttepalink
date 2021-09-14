export const AssignTheSubjects = (Class) =>{
    let TheSubjects = null;
    switch (Class) {
       case ('Class 12 Sci. (Without Biology)'): 
        TheSubjects = {
           array:[ 
              {value:"Physics",id:"12Sci2Phy",Class:"Class 12"},
              {value:"Chemistry",id:"12Sci2Chem",Class:"Class 12"},
              {value:"Mathematics",id:"12Sci2Maths",Class:"Class 12"},
              {value:"Hindi",id:"12Sci2Hindi",Class:"Class 12"},
              {value:"English",id:"12Sci2Eng",Class:"Class 12"}
            ],
            Subject:"Physics",
            Class:"Class 12"
         }
       break;
       case ('Class 12 Sci.(Without Maths)'): 
        TheSubjects ={
            array:[
               {value:"Physics",id:"12Sci1Phy",Class:"Class 12"},
               {value:"Chemistry",id:"12Sci1Chem",Class:"Class 12"},
               {value:"Biology",id:"12Sci1Bio",Class:"Class 12"},
               {value:"Hindi",id:"12Sci1Hindi",Class:"Class 12"},
               {value:"English",id:"12Sci1Eng",Class:"Class 12"}
            ],
            Subject:"Physics",
            Class:"Class 12"
         }
      break;
      case ('Class 12 Commerce'): 
        TheSubjects = {
           array:[
             {value:"Accountancy",id:"12Com",Class:"Class 12"},
             {value:"Business Studies ",id:"12Bus",Class:"Class 12"},
             {value:"Economics",id:"12Eco",Class:"Class 12"},
             {value:"Mathematics",id:"12ComMaths",Class:"Class 12"},
             {value:"English",id:"12ComEng",Class:"Class 12"}
           ],
           Subject:"Accountancy",
           Class:"Class 12"
         }
      break;
      case ('Class 12 Arts'): 
         TheSubjects ={
            array:[
              {value:"History",id:"12His",Class:"Class 12"},
              {value:"Geography",id:"12Geo",Class:"Class 12"},
              {value:"Political Science",id:"12Pol",Class:"Class 12"},
              {value:"Hindi",id:"12ArtsHindi",Class:"Class 12"},
              {value:"English",id:"12ArtsEng",Class:"Class 12"}
            ],
            Subject:"History",
            Class:"Class 12"
         }
      break;
      case ('Class 11 Sci.(Without Biology)'): 
         TheSubjects ={
            array:[
              {value:"Physics",id:"11Sci2Phy",Class:"Class 11"},
              {value:"Chemistry",id:"11Sci2Che",Class:"Class 11"},
              {value:"Mathematics",id:"11Sci2Maths",Class:"Class 11"},
              {value:"Hindi",id:"11Sci2hindi",Class:"Class 11"},
              {value:"English",id:"11Sci2Eng",Class:"Class 11"}
            ],
            Subject:"Physics",
            Class:"Class 11"
         }
      break;
      case ('Class 11 Sci.(Without Maths)'): 
         TheSubjects = {
            array:[
              {value:"Physics",id:"11Sci1Phy",Class:"Class 11"},
              {value:"Biology",id:"11Sci1Bio",Class:"Class 11"},
              {value:"Chemisrty",id:"11Sci1Chem",Class:"Class 11"},
              {value:"Hindi",id:"11Sci1Hindi",Class:"Class 11"},
              {value:"English",id:"11Sci1Eng",Class:"Class 11"}
            ],
            Subject:"Physics",
            Class:"Class 11"
         }
       break;
       case ('Class 11 Commerce'): 
         TheSubjects = {
            array:[
              {value:"Accountancy",id:"11Acc",Class:"Class 11"},
              {value:"Business Studies",id:"11Buss",Class:"Class 11"},
              {value:"Economics",id:"11Eco",Class:"Class 11"},
              {value:"Hindi",id:"11ComHindi",Class:"Class 11"},
              {value:"English",id:"11ComEng",Class:"Class 11"}
            ],
            Subject:"Accountancy",
            Class:"Class 11"
         }
      break;
      case ('Class 11 Arts'): 
         TheSubjects = {
            array:[
              {value:"History",id:"11Hist",Class:"Class 11"},
              {value:"Geography",id:"11Geo",Class:"Class 11"},
              {value:"Political Science",id:"11Pol",Class:"Class 11"},
              {value:"Hindi",id:"11ArtsHindi",Class:"Class 11"},
              {value:"English",id:"11ArtEng",Class:"Class 11"}
            ],
            Subject:"History",
            Class:"Class 11"
         }
      break;
      case ('Class 10'): 
         TheSubjects ={
            array:[
              {value:"Science",id:"10Sci",Class:"Class 10"},
              {value:"Social Science",id:"10SST",Class:"Class 10"},
              {value:"Mathematics",id:"10Maths",Class:"Class 10"},
              {value:"Hindi",id:"10Hindi",Class:"Class 10"},
              {value:"English",id:"10English",Class:"Class 10"}
            ],
            Subject:"Science",
            Class:"Class 10"
         }
      break;
      case ('Class 9'): 
         TheSubjects = {
            array:[
              {value:"Science",id:"9Sci",Class:"Class 9"},
              {value:"Social Science",id:"9SST",Class:"Class 9"},
              {value:"Mathematics",id:"9Maths",Class:"Class 9"},
              {value:"Hindi",id:"9Hindi",Class:"Class 9"},
              {value:"English",id:"9English",Class:"Class 9"}
            ],
            Subject:"Science",
            Class:"Class 9"
         }
      break;
      case ('Class 8'): 
        TheSubjects = {
          array:[
            {value:"Science",id:"8Sci",Class:"Class 8"},
            {value:"Social Science",id:"8SST",Class:"Class 8"},
            {value:"Mathematics",id:"8Maths",Class:"Class 8"},
            {value:"Hindi",id:"8Hindi",Class:"Class 8"},
            {value:"English",id:"8English",Class:"Class 8"}
          ],
          Subject:"Science",
          Class:"Class"
         }
      break;
      default : 
      TheSubjects = null;
    }
   return TheSubjects;
 }
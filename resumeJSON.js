
// 2.) create your own resume data in JSON format


let myresume= {
   
    objective:["To obtain a fresher position as a software engineer in a fast-paced organized where technical skills and creative thinking are useful. A highly motivated software   engineer , seeking to get a position in a reputed company  where I can use my skills and knowledge to learn new things and grow as a software developer"
  
    ],
   QUALIFICATION:{
        
       Department     : "B.SC computer science",

       INSTITUTION    :"Vellore institute of technology",

       UNIVERSITY     :"vellore institute",

       YEAROFPASSING  :"2023",

       CGPA           :   "8.3 "   ,

    },

    HigherSecondaryCertificate:{

        INSTITUTION     : "Sfs matric higher secondary school",

        BOARD           : "State board ",

        YEAROFPASSING   :"2018",

        PERCENTAGE      : "74.8%",

    },

    
    SecondarySchoolLeavingCertificate:{

        INSTITUTION     : "Sfs matric higher secondary school",

        BOARD           : "State board ",

        YEAROFPASSING   :"2016",

        PERCENTAGE      : "84%",

},

    TECHNICALSKILLS:[

        "=> JavaScript",
        "=> Python",
        "=> HTML",
        "=> Css",
        "=> c and c++",

    ],                         
    
    CERTIFICATION:[
          "=> Completed  Diploma in, “Web Animation In CSE Softview” (2012)",
    ],

    PROJECTS:["=> Main Project-Augmented Based Menu Cards for Restaurants.",],

    ExtraCurricularActivities:[

       "=> Participated  District  Level Competition  In Silambam (2014)",

       "=> Playing  Football , Volleyball  , Settle Cock and   Carrom",
    ],
   
    HOBBIES:[ "=> Playing  Game In Playstation (PS4)",],
   
    PERSONALDETAILS:{
        name                  : "V.Nithish KUMAR",

        Age                   : "21",

        Email                 : "nithishkumarv0612@gmail.com",
         
        FathersName           :	"Mr. G.Vijayakumar",

        DOB                   : "12.12.2001",

        Gender                : "MALE",

        Religion	          :	"HINDU",

        MaritalStatus	      :"SINGLE",

        LanguageKnown	      :	"TAMIL, ENGLISH",

        PermanentAddress	  :	"51/d, vijayanarayan street , pudur,vaniyambadi , 635751.",

    }                                                                                                                                  
}



let JSONdata=JSON.stringify(myresume);
console.log(JSONdata);

let objdata=JSON.parse(JSONdata);
console.log(objdata);



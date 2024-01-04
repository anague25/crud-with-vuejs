
const STUDENTDB = 'StudentDb';

//to get a locale database


function getLocalDb(){
    if(!localStorage.getItem(STUDENTDB)){
        localStorage.setItem(STUDENTDB,JSON.stringify([]));
} 
    return JSON.parse(localStorage.getItem(STUDENTDB));
}



//function to add element 

function addStudent(student){
    const db = getLocalDb();
    student.id = Date.now()+"";
    db.push(student);
    updateDb(db);
}






//function to update student

function updateStudent(student){
    const db = getLocalDb();
   updatedDb = db.map(function(curStudent){
        if(curStudent.id == student.id){
            return {
                nom : student.nom,
                prenom : student.prenom,
                dateNaissance : student.dateNaissance  ,
                niveauScolaire : student.niveauScolaire ,
                id : student.id
            }
        }
        return curStudent;
    })
    updateDb(updatedDb);
}



//function to delete an element


function deleteStudent(student){
    const db = getLocalDb();
    const updatedDb = db.filter(function(curStudent){
        return curStudent.id != student.id;
    });



}



//function to get student trought his id

function getStudent(id){
    const db = getLocalDb();
    var filteredDb = db.filter((data)=> data.id != student.id);
    if(filteredDb.length > 0){
        return filteredDb[0];
    }
    return null;
}


//function to search student

function searchStudentByName(name){
    const db = getLocalDb;
    const filteredDb = db.filter((data)=>{
        return data.nom.toLowercase().include(name.toLowercase()) || data.prenom.toLowercase().include(name.toLowercase()) ;
    });
    return filteredDb;
}
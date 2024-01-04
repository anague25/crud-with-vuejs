




//function to add element 

function addStudent(student){
    const db = getLocalDb();
    student.id = Date.now()+"";
    db.push(student);
    updateDb(db);
}






//function to update student

function updateStudent(student){
    const db = getLocalDB();
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
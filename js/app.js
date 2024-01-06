const checkIfEmptyValue = (obj)=>{
    let isEmpty = false;
    for(const prop in obj){
        if(obj[prop] == ""){
            isEmpty == true;
        }

    }    
    return isEmpty;
}


const showSuccessMessage = (message)=>{
    Swal.fire({
        position:'top-end',
        title: message,
        
        icon: "success",
        timer:1500,
        showConfirmButton:false
      });
}
const showErrorMessage = (message)=>{
    Swal.fire({
        position:'top-end',
        title: message,
        // text: "You clicked the button!",
        icon: "error",
        timer:1500,
        showConfirmButton:false
      });
}



const App = {

    data() {
        return {
            showHome: false,
            showCreateForm: false,
            showStudentList: false,
            newStudent:{
                nom:'',
                prenom:'',
                dateNaissance:'',
                niveauScolaire:''
            }
        }
    },

    mounted(){
        this.changeNavigationState('Create');
    },

    methods:{

        goToHome(){
            this.changeNavigationState('Home');
        },
        
        goToCreateForm(){
            this.changeNavigationState('Create');
        },

        goToStudent(){
            this.changeNavigationState('List');
        },

        submitStudent(){

            if(!checkIfEmptyValue(this.newStudent)){
                if(!checkIfStudentExist(this.newStudent.nom,this.newStudent.prenom)){
                    addStudent(this.newStudent);
                    this.newStudent = {
                        nom:'',
                        prenom:'',
                        dateNaissance:'',
                        niveauScolaire:''
                    }
                    showSuccessMessage('etudiant ajoute avec success');
                }else{
                    showErrorMessage('cet etudiant est deja inscrit');
                }
               
            }else{
                showErrorMessage('veillez remplir tous les champs!');
            }
        },

        changeNavigationState(destination){
            this.showStudentList = false;
            this.showHome = false;
            this.showCreateForm = false;

            switch(destination){
                case 'Home' :
                    this.showHome = true;
                    break;

                case 'Create' :
                    this.showCreateForm = true;
                    break;

                case 'List' :
                    this.showStudentList = true;
                    break;

                    default :
                        this.showHome = true;
                        break;
            }

        }
    }

}

Vue.createApp(App).mount('#app')



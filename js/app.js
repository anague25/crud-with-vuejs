const App = {

    data() {
        return {
            showHome: false,
            showCreateForm: false,
            showStudentList: false,
        }
    },

    mounted(){
        this.changeNavigationState();
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



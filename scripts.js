let teams = []

let students =[]
let currentClass = {}
let currentStudents = []
let badges = [
    {'name': 'Grammar Guru',
     'awarded_to': '',
     'colour': 'red'

    },
    {'name': 'Vocabulary Virtuoso',
     'awarded_to': '',
     'colour': 'orange'
    },
    {'name': 'Verb Victor',
     'awarded_to': '',
     'colour': 'yellow'
    },
    {'name': 'Conversation Crackerjack',
     'awarded_to': '',
     'colour': 'olive'
    },
    {'name': 'Pronunciation Professional',
     'awarded_to': '',
     'colour': 'green'
    },
    {'name': 'Big Cheese',
     'awarded_to': '',
     'colour': 'teal'
    },
    {'name': 'Private Eyes',
     'awarded_to': '',
     'colour': 'blue'
    },
    {'name': 'Taskmaker',
     'awarded_to': '',
     'colour': 'violet'
    },
    {'name': 'Perfect Pencil',
     'awarded_to': '',
     'colour': 'purple'
    },
    {'name': 'Digital Boss',
     'awarded_to': '',
     'colour': 'pink'
    },
    {'name': 'Polite Pupil',
     'awarded_to': '',
     'colour': 'brown'
    },


]





//add Event Listener to add buttons
let enableControls = function(teams){
    document.querySelectorAll('.square.icon.large').forEach(item => {
        item.addEventListener('click', function(e){
            let team = teams.filter(team => team.id == e.target.id[0])[0]
            e.target.classList[0] == 'plus' ? team.points += 100 : team.points -= 100
            document.querySelector(`#points-${team.id}`).innerHTML = team.points
            renderTeams(teams)
        })
    })
    
    
}


// sort the teams by points and change the positions
let sortTeams = function(teams){
    teams.sort(function(a, b){
        return b.points  - a.points
    })
   
}

// Update positions based on points
let updatePositions = function(teams){
    for(let i=0; i < teams.length; i++){
        teams[i].position = i+1
    }
}

let renderTeams = function(teams){
    sortTeams(teams);
    updatePositions(teams);
    document.querySelector('#teamsList').innerHTML = ""
    for (let i in teams){
        document.querySelector('#teamsList').innerHTML += 
        `<div class="team" style="padding:30px">
            <div class="teamName" style="vertical-align: middle; width: 50%;  display: inline-block;">
            ${teams[i].position}. ${teams[i].name}  
            </div>
    
            <div class="teamPoints" style="width: 30%; display: inline-block; vertical-align: middle;">
                <span id="points-${teams[i].id}">${teams[i].points}</span> Points
            </div>
    
            <div class="controls" style="vertical-align: middle;  display: inline-block;">
                <i class="plus square icon large" id="${teams[i].id}-addButton"></i>
                <i class="minus square icon large" id="${teams[i].id}-minusButton"></i>
            </div>
        </div>`
    };
    enableControls(teams)
}

renderTeams(teams);


// render Students
let renderStudents = function(students){
    document.querySelector('#studentsList').innerHTML = ""
    for (let i in students){
        document.querySelector('#studentsList').innerHTML +=
        `<div class="item">
            <img class="ui avatar image" src="${students[i].avatar}">
            <div class="content" id="studentContent-${students[i].name}" style="width:80%">
                <span class="header studentName">${students[i].name}
                <div class="ui dropdown">
                    <i class="trophy Icon"></i> 
                    <div class="badges menu">
                        <div class="item badge" student="${students[i].name}">Grammar Guru</div>
                        <div class="item badge" student="${students[i].name}">Vocabulary Virtuoso</div>
                        <div class="item badge" student="${students[i].name}">Verb Victor</div>
                        <div class="item badge" student="${students[i].name}">Conversation Crackerjack</div>
                        <div class="item badge" student="${students[i].name}">Pronunciation Professional</div>
                        <div class="item badge" student="${students[i].name}">Big Cheese</div>
                        <div class="item badge" student="${students[i].name}">Private Eyes</div>
                        <div class="item badge" student="${students[i].name}">Taskmaker</div>
                        <div class="item badge" student="${students[i].name}">Perfect Pencil</div>
                        <div class="item badge" student="${students[i].name}">Polite Pupil</div>
                        <div class="item badge" student="${students[i].name}">Digital Boss</div>

                    </div>
                </div>
                <span id="badges-${students[i].name}" class="studentBadge">

                </span>
                
            </div>
            
            
          
        </div>`
    }
}

{/* <i class="trophy icon"></i> */}
renderStudents(students);


// Badges



// when you click the trophy trigger pop up with Badges





// menu event listener to update
let menuEventListener = function(){
    
    document.querySelectorAll('.item.badge').forEach(item=>
        item.addEventListener('click', function(e){
            
            let badge = badges.filter(badge => badge.name == e.target.innerHTML)[0]
            let student = students.filter(student => student.name == e.target.attributes.student.value)[0]
            student.badges.push(badge)
            e.target.outerHTML=""
            populateBadges()    
        }))
}




// populate badges
let populateBadges = function(){

    // clear existing badges first
    students.forEach(student => 
        document.querySelector(`#badges-${student.name}`).innerHTML =""
        )


    students.forEach(student =>
        
        student.badges.forEach(badge => 
            document.querySelector(`#badges-${student.name}`).innerHTML += 
                `<span class="ui ${badge.colour} label" style="vertical-align:middle">${badge.name}</span>`
            
            )
        )
 
}





let LX5class = {
    class_students: [
        {
            name: 'Paula',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light',
            badges: [],
        },
        {
            name: 'Martina',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Smile&skinColor=Light',
            badges: [],
        },
        {
            name: 'Anselmo',
            avatar: '',
            badges: [],
        },
        {
            name: 'Jorge',
            avatar: '',
            badges: [],
        },
        {
            name: 'Nahia',
            avatar: '',
            badges: [],
        },
    ],

    class_teams: [
        {
            'id': 1,
            'position': 1,
            'name': "Paula, Martina, Nahia",
            'points': 0
        },
        {
            'id': 2,
            'position': 2,
            'name': "Jorge & Anselmo",
            'points': 0
        },


    ],

    addStudents: function(class_students){
        this.class_students.forEach(student=>
            students.push(student)
        )
        renderStudents(students)
        populateBadges();
        $('.ui.dropdown').dropdown()
        menuEventListener();
    },
    
    addTeams: function(class_teams){
        this.class_teams.forEach(team=>
            teams.push(team)
        )
        renderTeams(teams)
    }
}





// Function to generate random students
getRandomStudent = function(students){
    student = students[Math.floor(Math.random() * students.length)]
    console.log(student.name)
}

// will need a button for spanish siren and a counter


let LX6class = {
    class_students: [
        {
            name: 'Eloisa',
            avatar: 'avatars/eloisa.png',
            badges: [],
        },
        {
            name: 'Nicolas',
            avatar: 'avatars/nicolas.png',
            badges: [],
        },
        {
            name: 'Marcos',
            avatar: 'avatars/marcos.png',
            badges: [],
        },
        {
            name: 'Natalia',
            avatar: 'avatars/natalia.png',
            badges: [],
        },
        {
            name: 'Cayetano',
            avatar: 'avatars/cayetano.png',
            badges: [],
        },
        {
            name: 'Jose',
            avatar: 'avatars/jose.png',
            badges: [],
        },
    ],

    class_teams: [
        {
            'id': 1,
            'position': 1,
            'name': "Eloisa & Natalia",
            'points': 0
        },
        {
            'id': 2,
            'position': 2,
            'name': "Marcos & Nicolas",
            'points': 0
        },
        {
            'id': 3,
            'position': 2,
            'name': "Cayetano & Jose",
            'points': 0
        },



    ],

    addStudents: function(class_students){
        this.class_students.forEach(student=>
            students.push(student)
        )
        renderStudents(students)
        populateBadges();
        $('.ui.dropdown').dropdown()
        menuEventListener();
    },
    
    addTeams: function(class_teams){
        this.class_teams.forEach(team=>
            teams.push(team)
        )
        renderTeams(teams)
    }
}

// LX6class.addStudents()
// LX6class.addTeams()

$('.ui.modal').show()
$('.ui.dropdown').dropdown()

// Functions for the menu

// classes
const classes = [
    {name: 'KET LX 6-7',
     students:[
            {
                name: 'Eloisa',
                avatar: 'avatars/eloisa.png',
                badges: [],
            },
            {
                name: 'Nicolas',
                avatar: 'avatars/nicolas.png',
                badges: [],
            },
            {
                name: 'Marcos',
                avatar: 'avatars/marcos.png',
                badges: [],
            },
            {
                name: 'Natalia',
                avatar: 'avatars/natalia.png',
                badges: [],
            },
            {
                name: 'Cayetano',
                avatar: 'avatars/cayetano.png',
                badges: [],
            },
            {
                name: 'Jose',
                avatar: 'avatars/jose.png',
                badges: [],
            }
        ]
    },

    {name: 'KET LX 5-6',
     students:[
            {
                name: 'Paula',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Martina',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Anselmo',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Jorge',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Nahia',
                avatar: 'avatars/blank.png',
                badges: [],
            },
        ]
    },
    {name: 'KET MJ 6-7',
     students:[
            {
                name: 'Nacho',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Sofia',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Gabriella',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Jesus',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Raul',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Nariman',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Eduardo',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Celia',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            
        ]
    },
    {name: 'Flyers MJ 4-5',
     students:[
            {
                name: 'Angela',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Julia',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Alvaro',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Jesus',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Gustavo',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Paula',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Victor',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Sergio',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Irene',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Candela',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            
        ]
    },
    {name: 'Flyers MJ 5-6',
     students:[
            {
                name: 'Javier',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Nacho',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Maria',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Raul',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Natalia',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Adrian',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Sergio',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            {
                name: 'Andres',
                avatar: 'avatars/blank.png',
                badges: [],
            },
            
        ]
    },
    {name: 'Custom',
     students:[]
    }

]



// renderStudent List
let menuRenderStudentList = function(students){
    document.querySelector('#start-studentsList').innerHTML = ""

    
    if (students.length > 0){
        for(let i in students){
            document.querySelector('#start-studentsList').innerHTML +=
            
            `<div class="item">
                <img class="ui avatar image" src="${students[i].avatar}">
                <div class="content">
                <div class="header">${students[i].name}</div>
                </div>
            </div>
            `
        }
    } else {
        document.querySelector('#start-studentsList').innerHTML += "No students added"
    }
}

// event listener on menu
document.querySelector('#startMenu-students').addEventListener('click', function(e){
    console.log(e.target.innerHTML)
    if (e.target.innerHTML=="Custom"){
        students = []
    } else {
        let studentClass = classes.filter(sclass => sclass.name == e.target.innerHTML)[0]
        students = studentClass.students
        currentClass = studentClass
        
    }
    
    
    
    menuRenderStudentList(students)
})

//start menu input to add student
document.querySelector('#startmenuinput-add').addEventListener('click', function(e){
    let name = document.querySelector('#startmenuinput-name').value
    students.push(
        {
        name: name,
        avatar: 'avatars/blank.png',
        badges: []
        }
    )
    menuRenderStudentList(students)
})


let ss=["Paula", "Martina", "Sofia", "Gabriella", "Jose", "Natalia", "Irene", "Jacobo"]

let generateRandomTeams = function(studentNames, teamSize){

    let studentNamesCopy = studentNames.slice()
    teams = []
    let classTeams = []

    let num_teams = Math.ceil(studentNamesCopy.length/teamSize)
    for(let i=0; i<num_teams; i++){
        classTeams.push({
            id: i,
            name: "",
            position: i+1,
            points: 0
            })
    }
    console.log(classTeams)

    for (let i in classTeams){
        let class_size = 0
        while (class_size < teamSize && studentNamesCopy.length > 0){
            classTeams[i].name += studentNamesCopy.pop([Math.floor(Math.random() * studentNamesCopy.length)]) + " "
            class_size += 1
        }

    }




    teams = classTeams
    console.log(classTeams)
}

let menuRenderTeams = function(teams){
    document.querySelector('#start-teamsList').innerHTML = ""

    for (let i in teams){
        document.querySelector('#start-teamsList').innerHTML +=
            `<li>${teams[i].name}</li>`
        
    }

}

// Event Listener on random Button
document.querySelector('#generateRandomTeamsButton').addEventListener('click', function(){

    for(let i in currentClass.students){
        currentStudents.push(currentClass.students[i].name)
    }
    
    generateRandomTeams(currentStudents, 2)
    menuRenderTeams(teams)
    document.querySelector('#generateRandomTeamsButton').style.display = "none"

})


document.querySelector('#modal-start').addEventListener('click', function(){
    $('.ui.modal').hide()
    $('#mainContainer').css('display', "")
    renderStudents(students)
    renderTeams(teams)
    $('.ui.dropdown').dropdown()
    menuEventListener()
})


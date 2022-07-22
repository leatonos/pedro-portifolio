$(document).ready(function(){

    //List of my skills
    let skills = [
        {title:"HTML5",img:"img/icons/html.svg",desc:"Something about PHP"},
        {title:"Javascript",img:"img/icons/javascript-icon.svg",desc:"Something about Javascript"},
        {title:"CSS",img:"img/icons/css3-icon.svg",desc:"Something about CSS"},
        {title:"React.js",img:"img/icons/react.svg",desc:"Something about React.js"},
        {title:"php",img:"img/icons/php.svg",desc:"Something about PHP"},
        {title:"Firebase",img:"img/icons/firebase.svg",desc:"Something about PHP"},
        {title:"Mysql",img:"img/icons/mysql.svg",desc:"Something about PHP"},
        {title:"Figma",img:"img/icons/figma.svg",desc:"Something about PHP"},
        {title:"Wordpress",img:"img/icons/wordpress.svg",desc:"Something about PHP"},

    ]
    

    //This loop loads all my skills into the pannel
    skills.forEach(myFunction);

        function myFunction(skill, i) {
            $("#skill-pannel").append('<div class="col-lg-4 col-6 skill" index="'+i+'"><img class="img-fluid p-4" src="'+skill.img+'"><h3 class="skill-title text-center">'+skill.title+'</h3></div>')
        }

    //Click Event Listener

    $(document).on('click','.col-lg-4.col-6.skill', function(){
        let i = $(this).attr("index")
            $("#skill-desc-title").text(skills[i].title)
            $("#skill-desc-text").text(skills[i].desc)
        });

  });
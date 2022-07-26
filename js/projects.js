$(document).ready(function(){

    let projects = [
      {name:"Project 1",img:"https://via.placeholder.com/550x350/FFFF00/000000?Text=WebsiteBuilders.com",desc:"Project Description", btn:"See Project",link: ""},
      {name:"Project 2",img:"https://via.placeholder.com/550x350/FFFF00/000000?Text=WebsiteBuilders.com",desc:"Project Description", btn:"See Project",link: ""},
      {name:"Project 3",img:"https://via.placeholder.com/550x350/FFFF00/000000?Text=WebsiteBuilders.com",desc:"Project Description", btn:"See Project",link: ""},
      {name:"Project 4",img:"https://via.placeholder.com/550x350/FFFF00/000000?Text=WebsiteBuilders.com",desc:"Project Description", btn:"See Project",link: ""},
      {name:"Project 5",img:"https://via.placeholder.com/550x350/FFFF00/000000?Text=WebsiteBuilders.com",desc:"Project Description", btn:"See Project",link: ""},
      {name:"Project 6",img:"https://via.placeholder.com/550x350/FFFF00/000000?Text=WebsiteBuilders.com",desc:"Project Description", btn:"See Project",link: ""},
      {name:"Project 7",img:"https://via.placeholder.com/550x350/FFFF00/000000?Text=WebsiteBuilders.com",desc:"Project Description", btn:"See Project",link: ""},
      {name:"Project 8",img:"https://via.placeholder.com/550x350/FFFF00/000000?Text=WebsiteBuilders.com",desc:"Project Description", btn:"See Project",link: ""},
      {name:"Project 9",img:"https://via.placeholder.com/550x350/FFFF00/000000?Text=WebsiteBuilders.com",desc:"Project Description", btn:"See Project",link: ""},
    ]

    //Code just for Desktop
    let screenWidth = screen.width;
    let projectWidth = 700;
   
    let finalSize = projectWidth * projects.length;
    if(screenWidth > 992){
      $("#projects_wrapper").css("width", finalSize)
    }

    



    projects.forEach(renderProjects);

    function renderProjects(project, i){
      $("#projects_wrapper").append('<div class="project"><img class="img_fluid" src="'+project.img+'"><h3>'+project.name+'</h3><p>'+project.desc+'</p><a href="'+project.link+'">'+project.btn+'</a></div>')
    }

    $(".project").css("width", projectWidth)

});
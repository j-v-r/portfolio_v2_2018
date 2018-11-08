var html = "";

var projects = [ 
       {image: "assets/thumbnail_imgs/efbasketball.png",
        title: "Elites Finest Basketball",
        url: "www.efbasketball.com",
        description: "This is a live website I developed for a friend as well as for further experience. The website is for a Twin Cities based youth basketball team (Elites Finest Basketball) and was designed to provide a fixed web asset featuring team related information, updates, rosters, images, and contact information. HTML, CSS, and JavaScript are used to create this page. Everything is custom built and I also configued the domain name, SSL certificate, and server hosting using NameCheap. I also manage the web asset in Google's Search Console. I am always working to update this page and hope to apply a new design scheme this upcoming season, with more image assets and a more modern, professional look."
       },
       {
        image: "assets/thumbnail_imgs/johnr-webdev.png",
        title: "My First Portfolio Site",
        url: "johnr-webdev.com",
        description: "This is my first portfolio site, johnr-webdev.com. Looking back on the design choice (tried a single page layout), font choice, color choice, and I can't help but cringe a bit (I think I was aiming for a Van Gogh feel). But this was one of my first 'web assets' and has links to many projects I have worked on in the past and that work was instrumental to get where I am today."
       },
       {
        image:"assets/thumbnail_imgs/post-diskus.png",
        title: "Post Diskus",
        url: "johnr-webdev.com/postDiskus",
        description: "Post Diskus is a simple, mock application I built using front end tools (HTML, CSS, and JavaScript/jQuery). This project is meant to demonstrate knowledge of document object modeling and HTML element manipulation. This is one of my favorite project and I hope to refactor it to work with a database one day. This is meant to be a simple blogging application, where users can make post and comment on said post. You can add a title and content on the right side (under “Contribute) and click “Submit Post”. You will see a post generated on the left side (under “Discussion”). This was done using JavaScript functions to build HTML templates, and then using jQuery to control for what happens during different events. At this point you can comment on the post as much as you want. Goals for the future of this project include a database to hold new post and comments, user authentication, and a more robust interface. I think this could be a great practice application one day!"
       },
       {
        image: "assets/thumbnail_imgs/open-library-ajax.png",
        title: "Open Library API Ajax",
        url: "johnr-webdev.com/treehouseProject10/",
        description: "This project was my first time using AJAX technology to work with data from another application via their API. Similar to Post Diskus, this is a project I intend to revisit overtime and refactor. I am learning more about RESTful applications and the conventions used. I hope to develop a more full fledged application that can pull information on all books in Open Libraries database."
       },
       {
        image: "assets/thumbnail_imgs/optimization.png",
        title: "Optimization Project",
        url: "johnr-webdev.com/treehouseProject11/",
        description: "In this project I had to put my understanding of website optimization to the test. I was given a poorly optimized set of files for a website. I made the site more ready for production by pruning the HTML, optimizing font use, and preventing blocking scripts. I also used Gulp.js to reduce image sizes, as well as to concat and minify JavaScript and CSS files."
       }
];

for(var i = 0; i < projects.length; i++) {
    html +=  `
             <div class="project">
                <div class="card-border">
                    <img class="thumbnail-img" src="${projects[i].image}">
                    <h3>${projects[i].title}</h3>
                    <a href="http://${projects[i].url}">${projects[i].url}</a>
                    <p>&nbsp;&nbsp;${projects[i].description}</p>
                </div>
            </div>
            `
}
    
document.getElementById("projects").innerHTML = html;
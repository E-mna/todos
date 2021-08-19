const postDiv = document.getElementById("todoDiv");

// Requête GET
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json()) // Transformation de la réponse reçu au format JSON
.then(posts => {    // Extraction de l'ensemble des post du JSON

    // Pour chaque post extrait, créer une arboresence à ajouter au DOM
    posts.forEach(post => {
        let postSection = document.createElement("section");


       if(post.completed == true){
        postSection.classList.add("vert");  
       }else{
        postSection.classList.add("rouge"); 
       }
       //console.log(post);
  
       let title = document.createTextNode(post.title);
       let titleparagraph = document.createElement("h1");

    
        titleparagraph.appendChild(title);
        postSection.appendChild(titleparagraph);
        postDiv.appendChild(postSection);  
      
      });
     
    });
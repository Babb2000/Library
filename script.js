

 
$(document).ready(function(){


 
    let myLibrary = []; //Array of objects to hold all the different types of books

    function Bookshelf(title, author, numPages, read)
    {
        this.title = title,
        this.author = author,
        this.numPages = numPages,
        this.read = read;
    }


    //Define functions on the prototype of the object
    Bookshelf.prototype.info = function (){
        return (`${title}, by ${author}, ${numPages} pages ${read}`);
    }


    //Function to add book to library
    
    let butt = document.getElementById('theButton');

    butt.addEventListener("click", function(event){

        event.preventDefault();
        let holder = document.getElementById("author").value;
        console.log(holder);
    })
    

});

  




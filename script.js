

 
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


    //Function to add book to Library
    function addBookToLibrary()
    {
        let formHolder = document.getElementById('newContainer');
        let butt = document.getElementById("buttonContainer");

        butt.addEventListener("click", function(event){
            event.preventDefault();

            let titleVal = document.getElementById('title').value;
            console.log(titleVal);
            let authorVal = document.getElementById('author').value;
            console.log(authorVal);
            let numPages = parseInt(document.getElementById('pages').value);
            console.log(numPages);

            formHolder.reset();
        })
    }

    addBookToLibrary();
    

});

  




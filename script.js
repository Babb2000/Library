

 
$(document).ready(function(){


 
    let myLibrary = []; //Array of objects to hold all the different types of books

    function Book(title, author, numPages, read)
    {
        this.title = title,
        this.author = author,
        this.numPages = numPages,
        this.read = read;
    }


    //Define functions on the prototype of the object
    Book.prototype.info = function (){
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
            let authorVal = document.getElementById('author').value;
            let numPages = parseInt(document.getElementById('pages').value);
            
            formHolder.reset(); //Every time submit button is clicked reset the form

            let book1 = new Book(titleVal, authorVal, numPages);
            myLibrary.push(book1);

            console.log(myLibrary);
        })
    }

    addBookToLibrary();
    

});

  




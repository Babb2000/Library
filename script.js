

 
$(document).ready(function(){
    
    
    let accNum = 0;
 
    let myLibrary = []; 

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


   
    function booksRead(accNum){

       let toSe = accNum.toString();
       document.getElementById('change1').innerText = toSe;
       
    }

    function totalBooks(accNum){
        let toSe = accNum.toString();
        document.getElementById('change3').innerText = toSe;
    }

    //Function to change the display number each time a book is read
    function addNumberRead(){
        accNum ++;
       booksRead(accNum);
       totalBooks(accNum);
        
    }


     //Function to loop through array of objects
     function displayBook(myLibrary)
     {
          for(let prop in myLibrary)
          {
              
              let bookTitle = myLibrary[prop].title;
              let bookAuthor = myLibrary[prop].author;
              let bookPages = myLibrary[prop].numPages;

              displayBookShelf(bookTitle, bookAuthor, bookPages);
              myLibrary.pop();//Remove last object in array after data is sent 
          }

          
     }

     

     //Function to create a div to display the books data

     /*function displayBookShelf(title, author, numPages)
     {

        let strPages = numPages.toString();
        let holder1 = document.getElementById('displayBookShelf');


        let p1 = document.createTextNode(title);
        let p2 = document.createTextNode(author);
        let p3 = document.createTextNode(strPages);

        let newDiv = document.createElement('div');
        newDiv.style.height = "200px";
        newDiv.style.width = "150px";
        newDiv.style.borderRadius = "20px";
        newDiv.style.border = "1px solid #000000";
        newDiv.style.backgroundColor = "#CCCCCC";
        newDiv.style.display = "flex";
        newDiv.style.justifyContent = "center"
        newDiv.style.gap = "10px";
        newDiv.style.margin = "5px";

        let newDiv2 = document.createElement('div');
        let newDiv3 = document.createElement('div');
        let newDiv4 = document.createElement('div');

        newDiv2.style.width = "auto";
        newDiv2.style.height = "44.25";
        newDiv2.style.borderRadius = "20px";
        newDiv2.style.display = "flex";
        newDiv2.style.backgroundColor = "rgb(169,169,169)";
        newDiv2.style.fontSize = "14px";

        newDiv2.appendChild(p1);

        newDiv.appendChild(newDiv2);

        holder1.appendChild(newDiv);
     }*/
     

    //Function get input from user for each book and add it the myLibrary array
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

            displayBook(myLibrary);
            addNumberRead();
        })
    }

    


    addBookToLibrary();
 







































    

});

  




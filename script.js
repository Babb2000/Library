

 
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


    //Function to replace divs
    function replaceDivs(accNum){

    let holder = document.getElementById('change1');
      //let holder3 = document.getElementById('change1');
      // let number = parseInt(holder);
 
       let toSe = accNum.toString();
       let textS = document.createTextNode(toSe)
       console.log(textS);
       
 
       let newDiv = document.createElement('div');
       newDiv.appendChild(textS);
       newDiv.style.fontSize = "40px";
       newDiv.style.fontFamily = "'Libre Bodoni', serif";
 
       let holder2 = document.getElementById("book1");
       holder2.removeChild(holder);
       holder2.appendChild(newDiv);
    }

    //Function to change the display number each time a book is read
    function addNumberRead(){
        accNum ++;
       replaceDivs(accNum);
        
    }


     //Function to display each book added to the "database" to the website
     function displayBook(myLibrary)
     {
          for(let key in myLibrary)
          {
              console.log(myLibrary[key]);
          }
     }

     

     //Function to create a div to display the books data
     

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

  




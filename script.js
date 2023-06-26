
 
$(document).ready(function(){
    
    
    let accNum = 0;
    let accNumSub = 0;
    let counterID= 0;
    let holderMyLibrary = []; //Array to hold object
 
    let myLibrary = []; 

    function Book(title, author, numPages, read) //Constructor to instantiate book instances
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


    function booksUnread(accNumSub)
    {
        let toSe = accNumSub.toString();
        document.getElementById('change2').innerText = toSe;
    }
   
    function booksRead(accNum){
        accNum++
       let toSe = accNum.toString();
       document.getElementById('change1').innerText = toSe;
       
    }

    function totalBooks(){
        let holder = displayChildElements();
        document.getElementById('change3').innerText = holder;
    }



    function subNumberRead(){
        accNumSub++;
        booksUnread(accNumSub);
        accNum--;
    }
    function removeABook(theId)
    {
        let holdingtheId = document.getElementById(theId);

        
            holdingtheId.addEventListener("click", function(e){
            e.currentTarget.parentElement.parentElement.parentElement.remove();
            subNumberRead();
            })
        
    }


//Function to create a div to display the books data

function displayBookShelf(title, author, numPages)
{
 
   counterID++;
   let strcounterId = counterID.toString();
   
   let strPages = numPages.toString();
   let holder1 = document.getElementById('displayBookShelf');


   let p1 = document.createTextNode(title);
   let p2 = document.createTextNode(author);
   let p3 = document.createTextNode(strPages);
   let p4 = document.createTextNode('Remove a book');

   let titleText = document.createTextNode('Title: ');
   let authorText = document.createTextNode('Author: ');
   let numText = document.createTextNode('Number of Pages: ');

   let para1 = document.createElement('p');
   let para2 = document.createElement('p');
   let para3 = document.createElement('p');
   let button1 = document.createElement('button');
   button1.setAttribute('id', "buttonRemove" + strcounterId);
   button1.style.height = "30.5px";


   para1.appendChild(p1);
   para2.appendChild(p2);
   para3.appendChild(p3);
   button1.appendChild(p4);

   let newDiv6 = document.createElement('div');
   newDiv6.classList.add('fixFont');
   newDiv6.appendChild(titleText);
   newDiv6.appendChild(para1);

   let newDiv7 = document.createElement('div');
   newDiv7.classList.add('fixFont');
   newDiv7.appendChild(authorText);
   newDiv7.appendChild(para2);


   let newDiv8 = document.createElement('div');
   newDiv8.classList.add('fixFont');
   newDiv8.appendChild(numText);
   newDiv8.appendChild(para3);

   let newDiv9 = document.createElement('div');
   newDiv9.setAttribute("id", "fordivButton");
   newDiv9.appendChild(button1);
   


   let newDiv = document.createElement('div');
   newDiv.setAttribute("id", "practice" + strcounterId);
   newDiv.style.height = "200px";
   newDiv.style.width = "150px";
   newDiv.style.border = "1px solid #000000";
   newDiv.style.margin = "8px";
   newDiv.style.borderRadius = "20px";

   let newDiv2 = document.createElement('div');
   newDiv2.setAttribute("id", "forTitle");
   newDiv2.appendChild(newDiv6);

   let newDiv3 = document.createElement('div');
   newDiv3.setAttribute("id", "forAuthor");
   newDiv3.appendChild(newDiv7);

   let newDiv4 = document.createElement('div');
   newDiv4.setAttribute("id", "forPages");
   newDiv4.appendChild(newDiv8);

   let newDiv5 = document.createElement('div');
   newDiv5.setAttribute("id", "readOrNot");
   newDiv5.appendChild(newDiv9);

   
  newDiv.append(newDiv2, newDiv3, newDiv4, newDiv5);

   holder1.appendChild(newDiv);

   
       for(let i = 1; i <= holderMyLibrary.length; i++)
       {
            
            let holdingtheId = document.getElementById('buttonRemove' + i);
            
            if(holdingtheId.clicked == true);
            {
               removeABook(holdingtheId.id);
            }
       }
        
       totalBooks();
   
}


    //Function to loop through array of objects
     function displayBook(myLibrary)
     {
         let holderA = myLibrary.slice();
          holderMyLibrary.push(holderA);
          console.log(holderMyLibrary);

            for(let prop in myLibrary)
            {
              
                let bookTitle = myLibrary[prop].title;
                let bookAuthor = myLibrary[prop].author;
                let bookPages = myLibrary[prop].numPages;
            
                displayBookShelf(bookTitle, bookAuthor, bookPages);
                myLibrary.pop();//Remove last object in array after data is sent 
            }

     }

     

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
            booksRead();
        })
    }

    function displayChildElements(){
        let number = document.getElementById('displayBookShelf').childElementCount;
        return number;
    }
    
    addBookToLibrary();
  
    
   


































    

});
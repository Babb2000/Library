

$(document).ready(function(){

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

})
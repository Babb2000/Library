# Created a Library Website
Library Website

TakeAways:
---
1. The layout of the website was pretty straightforward, just used a couple of divs. One with a form inside of it to gather information about books, another that displays the number of books being added or removed to the "book-shelf" and one that displays each user-defined book back to the user.
The javascript I wrote gathered the user data from the form field, parsed it, and stored it into variables. I chose to store my data in an array of objects, with each index of the array representing a book object. One important thing to keep in mind with form-fields in HTML is that when a submit form button is clicked the HTML looks to send the data to a server/database. However, since I did not learn how to do that yet I just used the prevent default method on the event object of the submit button.
2. To display each book back out to the user, I used the functions `displayBook` and `displayBookShelf`. The displayBook function just steps through each index of the array and then steps through the properties of each object within that index, assigning the values to variables. Then I created an instance object set equal to the `Book()` constructor, passing in the values gathered in the previous step. To fix a bug with objects doubling up inside the array, I created a new array and set the current array objects equal to the new array using javascript's slice() method. The displayBookShelf function was a little more tedious as I had to style and create new HTML elements during run-time. A more efficient way of going about this function would be to break it up into smaller functions, and have CSS classes/id's already written so I can add them to elements using methods like `element.classList.add("myClass")`. 
3. The numeric values being displayed on the left pane are each functions that are called in other functions when the conditions are met. However, I need to return to these functions and fix some errors, as the value of the books removed increases in increments of more than one. The reason for this is that the function `removeABook` is called multiple times within a for-loop. So the counter within the `removeABook` function is incremented extra times, need to find a way to make this function static when called within a loop, or use a test case nested within the for-loop that only executes the function when true.
4. Overall in this project I learned a little bit more about using javascript objects, and constructors and implementing DOM manipulation. I definitely need to practice traversing the DOM more and using more cleaner code, ex) here is line 66 of my js file `e.currentTarget.parentElement.parentElement.parentElement.remove();`.


## Returning Project to add:
1. Form Validation
2. Fix the three values in the left pane during `removeABook` function 
3. Use some jQuery methods to fadeOut divs when the user clicks "Remove a book"

Check it Out Live Here: :airplane: https://babb2000.github.io/Library/

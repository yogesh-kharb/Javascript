The following information is of default javascript ->

# Javascript-----------> synchronous
#           |
#           |--------> single threaded


Execution context mainly say that : Each operation has to wait for the last one 
to complete before its own Execution

# Execution context-----|
                        |
                        |-----> execute one line of code at a time
                        |
                        |-----> console log -> 1
                        |
                        |-----> console log -> 2

## call stack and memory are already discussed.


            ------------------ Code ---------------------
            |                                          |
            |                                          |
        Blocking Code                           Non-blocking Code
           |                                           |
 Block and stop the program                 Do not effect the program                
    execution and then                         execution and then
           |                                           |
    read file syncrounous                     read file asyncrounous


Among them we can not say any one as better and we need to decide their use case
because somewhere we need some features which are avialable with one of them

## The javascript engine and diagram are as follows 

![Js engine](image.png)

### Note : we do not always have the web API with us (like we have node etc) then it is important to note that we do not have the DOM API with us because DOM always works in browser
It is the task queue which makes the js fast and asyncronous
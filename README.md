# To_do_list_vanilla_js
Created a todo list using only basic js, css, html with no libraries

contains 3 files index.html, src(styles.css and index.js)

index.html
  divided into 3 parts
   i) header and form for input
   ii) Delete tasks collectively buttons (all and completed ones)
   iii) List to display task
   
style.css
 divided into 2 sections
 i) style the header and the input blocks
      {just normal arrangement stle used to bring it to center and set background and colours of elements}
 ii) Stle the list elments
      {added features like hover and expand transition properties along with transform and rotae to delete
       tasks in animated form}
      {also added the strike through to indicate completed tasks}
      
 
 index.js
  divided into 3 parts Selectors, event Listeners and functions
  i) Selectors taken for input and list tags to take input and fill list tags
  ii) event Listeners to add, mark as complete and delete tasks
  iii) functions to perform all the major functionality
       { addtodo ---> to add the task, also create local storage to store the task and generat li tag
         DeleteAndComplete ---> to check the status of and mark it, to delete the task
                                   issue faced:: unable to generate animation before reload
                                   solution :: triggered animation using callback beacuse without it the page reloads directly wihout animation
         clearAllTasks ---> to clear all the tasks that are present
         clearCompletedTasks ---> filter completed tasks and delte them
         saveLocaltodos ---> to store the tasks in local storage (just for practice)
         getLocals ---> to fetch the tasks from local storage
         RemoveLocalTodos ---> to delete from local storage also when delete in fron end }
         
                                   
         
 

##Three tasks to do each day:

##Data object:
{
  tasks : [
    {
      id: 1,
      complete: false,
      title: 'Task 1',
      description: 'Description'
    },
    {
      id: 2,
      complete: true,
      title: 'Task 2',
      description: 'Completed task'
    }
  ],
  taskCount = tasks.length();
  reminderTime = DateTime.Now(); //Reminds user to add things to the list at specified times of the day
}

//Current
this.tasks = [
  {
    id: 1,
    text: "This is a completed task",
    complete: true
  }
];

##Workflow
Login - WIP

Default
 - Display list of tasks for the current day
 - Progress bar at the top

Add task button pressed:
  - User enters title
  - User enters optional description
  - System checks number of tasks for the current day
    - If the task count it higher than the limit (default 3) it gives you a warning

Completed task button pressed:
  - Task is marked as done
  - Count for the day is reduced, progress bar is increased (33, 66, 100)

System reminds user to add todos each day at the chosen time (push notification on phone)
System reminds user to complete the task at a chosen time, or warns them when the day is almost over

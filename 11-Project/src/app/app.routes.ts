import {  Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes : Routes = [
  {
    path: '',
    component: NoTaskComponent,
    title: 'No Task',
  },
  {
    path: 'users/:userId',//<domain>/users/<uID>
    component: UserTasksComponent,
    children: [
      {
        path: '', // <domain>/users/<uID> (default child route)
        redirectTo: 'tasks', // Redirect to the tasks route
        pathMatch: 'full', // Match the full path
      },
      {
        path: 'tasks', // <domain>/users/<uID>/tasks
        component: TasksComponent,
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
      }
    ],
    resolve: {
      userName : resolveUserName, // Resolve the user name before activating the route
    },
    title: resolveTitle // Resolve the title before activating the route

  },
  {
    path: '**', // Wildcard route for a 404 page
    component: NotFoundComponent,
  }
]
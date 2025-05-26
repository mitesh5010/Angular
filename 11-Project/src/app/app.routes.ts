import {  CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess > 0.5) {
    return true;
  }

  return new RedirectCommand(router.parseUrl('/unauthorized'));
}

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
    title: resolveTitle, // Resolve the title before activating the route
    canMatch: [dummyCanMatch],

  },
  {
    path: '**', // Wildcard route for a 404 page
    component: NotFoundComponent,
  }
]
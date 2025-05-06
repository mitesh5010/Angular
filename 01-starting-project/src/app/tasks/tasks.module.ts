import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { SharedModule } from "../shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TasksComponent,
    NewTaskComponent,
    TaskComponent
  ],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule,SharedModule],
})
export class TasksModule {}
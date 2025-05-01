import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[rendomIndex]);

  imagePath = computed(()=> '../../assets/users/' + this.selectedUser().avatar);
  

  onSelectUser(){
    const rendomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[rendomIndex]);
  }
}

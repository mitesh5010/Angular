import { Component, input, Input , computed, output, EventEmitter, Output} from '@angular/core';
import { type User } from './user.model';




@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  // imports: [CardComponent]
})
export class UserComponent {
  // @Input({ required:true}) id!:string;
  // @Input({ required:true }) avatar!:string;
  // @Input({ required:true }) name!:string;
  @Input({required:true}) user!: User;
  @Input({required: true}) selected!:boolean;
  @Output() select = new EventEmitter<string>();

  // select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(()=> {
  //    return '../../assets/users/'+this.avatar(); 
    // })

  get imagePath(){
    return '../../assets/users/'+this.user.avatar;
  }

  onSelectUser(){ 
    this.select.emit(this.user.id)
  }
}


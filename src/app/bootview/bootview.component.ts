import { Component ,OnInit} from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
@Component({
  selector: 'app-bootview',
  templateUrl: './bootview.component.html',
  styleUrls: ['./bootview.component.css']
})
export class BootviewComponent implements OnInit{

  users:any=[];


  constructor(private userservice:UserserviceService){ }

  ngOnInit(): void {
      this.userservice.getUsers().subscribe(result=>{
        this.users=result;
      })
  }
}

import { Component ,OnInit} from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
@Component({
  selector: 'app-viewlaptop',
  templateUrl: './viewlaptop.component.html',
  styleUrls: ['./viewlaptop.component.css']
})
export class ViewlaptopComponent implements OnInit {

  laptop:any=[];
  constructor(private userService:UserserviceService){ }
  ngOnInit(): void {
    this.userService.getLaptops().subscribe(result=>{
      this.laptop=result;
    })
      
  }

}

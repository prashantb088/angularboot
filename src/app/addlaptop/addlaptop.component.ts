import { Component ,OnInit} from '@angular/core';
import { UserserviceService } from '../service/userservice.service';
@Component({
  selector: 'app-addlaptop',
  templateUrl: './addlaptop.component.html',
  styleUrls: ['./addlaptop.component.css']
})
export class AddlaptopComponent implements OnInit {
laptopId: any;
laptopName: any;
laptopPrice:any;
constructor(private userservice:UserserviceService){ }

addlaptop(){
  var laptop={
    "laptopId": this.laptopId,
    "laptopName": this.laptopName,
    "laptopPrice": this.laptopPrice
  }
  this.userservice.addLaptop(laptop).subscribe(result=>{
    alert("success");
  })
}

ngOnInit(): void {
    
}
}

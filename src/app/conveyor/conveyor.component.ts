import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RouteConfigLoadStart } from '@angular/router';
import { ConveyorService } from '../conveyor.service';

export class IConveyor {
    
  status: number | undefined;
  error: boolean | undefined;
  data:   {
      conveyor: {
          conveyorId: number;
          conveyorName: string;
          description: string;
          language: string;
          length: number;
          width: number;
          height: number;
          weight: number;
          quality: number;
          icon: string;
          createdAt: string;
          userId: number;
      };


  } | undefined   
}


@Component({
  selector: 'app-conveyor',
  templateUrl: './conveyor.component.html',
  styleUrls: ['./conveyor.component.scss']
})


export class ConveyorComponent implements OnInit {

  data: IConveyor[] = [];
  columnsToDisplay = 'title';
  conveyors!: any;
  loginForm!: FormGroup;
  conveyorsArray: any;
  myObj: any;
  
  
  constructor(private service:ConveyorService) {
 
   }

  ngOnInit() {
    this.service.getConveyors()
    .subscribe(response => {
      this.conveyors = response;
      this.conveyorsArray = this.conveyors.data.conveyor;
      console.log(this.conveyors.data.conveyor)
  });



  }
  
}

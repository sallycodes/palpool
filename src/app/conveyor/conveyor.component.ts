import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConveyorService } from '../conveyor.service';
import { IConveyor } from '../IConveyor';

@Component({
  selector: 'app-conveyor',
  templateUrl: './conveyor.component.html',
  styleUrls: ['./conveyor.component.scss']
})


export class ConveyorComponent implements OnInit {

  data: IConveyor[] = [];
  conveyors!: any;
  conveyorsArray: any;
  
  
  constructor(private service:ConveyorService) { }

  ngOnInit() {
    this.service.getConveyors()
    .subscribe(response => {
      this.conveyors = response;
      this.conveyorsArray = this.conveyors.data.conveyor;
      console.log(this.conveyors.data.conveyor)
  });



  }
  
}

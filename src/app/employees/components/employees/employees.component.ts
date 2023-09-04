import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { IEmployee } from '../../models/iemployee';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: []
})
export class EmployeesComponent implements OnInit, OnDestroy {
  employees!: IEmployee[];
  employeesSubscription!: Subscription;

  constructor(private employeesService: EmployeesService) {
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    // lifecycle hook
    console.log('Inside ngOnInit');
    // whenever the comp is coming into view -- this will be called.
    // ideal place for your async calls
    // 1. send a req to the service on loading of the comp
    this.employeesSubscription = this.employeesService
      .getEmployees() // 2. get the resp from the service
      .subscribe((res: IEmployee[]) => {
        console.log(res);
        this.employees = res;
      });
  }

  ngOnDestroy() {
    // lifecycle hook
    // whenever the comp is going out of the view -- this will be called.
    // this is ideal place for you to unsubscibe the observables
    // also for cleaning up the data
    // you can also -- clear timeout, clear interval 

    if(this.employeesSubscription){
      this.employeesSubscription.unsubscribe();
    }

    if(this.employees){
      this.employees.length = 0;
    }
  
  }
}

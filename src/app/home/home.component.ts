import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data:any= [];

  constructor(private apiService: ApiService){ }

  ngOnInit(): void{
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data => {
      this.data = data.results;
    })
  }

}

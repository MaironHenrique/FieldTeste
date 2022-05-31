import { Component } from '@angular/core';
import { RepositorioService } from './field-control/repositorio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FieldControl';

  constructor(private repositorioService: RepositorioService)
  {}
  
  
  
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarInstrumento(textoBusqueda: string) {
    // console.log(textoBusqueda);
    this.router.navigate(['/buscar', textoBusqueda]);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  titulo = "Police Series App";
  detalhes = [
    {
      titulo: 'CSI: Miami',
      subtitulo: 'Crime Scene Investigation'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

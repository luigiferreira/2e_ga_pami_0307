import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  c,
    {
      titulo: "Brooklyn Nine-Nine",
      subtitulo: "",
      capa: "https://streamingsbrasil.com/wp-content/uploads/2022/01/Brooklyn-99-Temp-9-Thumbnail-1130x580.jpg",
      texto: "Brooklyn Nine-Nine (abreviado como B99) é uma série de televisão de comédia policial americana criada por Dan Goor e Michael Schur. A série gira em torno de Jake Peralta (Andy Samberg), um imaturo, mas talentoso, detetive da polícia de Nova York na fictícia 99.ª Delegacia do Brooklyn, que muitas vezes entra em conflito com seu novo comandante, o sério e severo capitão Raymond Holt (Andre Braugher).",
      genero: "comédia"
    },
    {
      titulo: "Criminal Minds",
      subtitulo: "Unidade de Análise Comportamental",
      capa: "https://multiversonoticias.com.br/wp-content/uploads/2022/02/multiverso-2.jpg",
      texto: "A equipe analisa criminosos do país por meio do modus operandi e a Vitimologia dos mesmos e antecipa seus próximos movimentos antes de eles agirem outra vez. Neste quesito, a série difere-se de outros dramas policias por focar mais no comportamento criminal do suspeito e elaboração de seu perfil (como profiler) do que o crime em si.",
      genero: "drama"
    }
  ];
  
  constructor() {}

}

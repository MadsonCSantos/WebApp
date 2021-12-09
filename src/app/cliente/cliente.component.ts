import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  title = 'Cliente';

  public clienteSelecionado: Cliente;

  public cliente = [
    {id: 1,nome:'Madson Santos ', telefone:'3254178445', email:'madsonwagner@hotmail.com'},
    {id: 2,nome:'Aercio aisona ', telefone:'3221459878', email:'wadfsefgsvsws@logbee.com'},
    {id: 3,nome:'Joanna afonso ', telefone:'3254178445', email:'antondhcnsns@hotmail.com'},
    {id: 4,nome:'Jorcks ariosa ', telefone:'3212387288', email:'mdmbzasfefef@hotmail.com'},
    {id: 5,nome:'Elric andrade ', telefone:'3251247758', email:'mariosbro@recargapay.com'},
    {id: 6,nome:'Patricia leal ', telefone:'3232551781', email:'loiradopeitao@atento.com'},
    {id: 7,nome:'Hercules Caio ', telefone:'3211254224', email:'alidnrpdfeio22@gmail.com'},
    {id: 8,nome:'Janaina Lopes ', telefone:'3214274932', email:'peganobausaes@hgmail.com'},
    {id: 9,nome:'Lucrecia dile ', telefone:'3292547132', email:'masoqevsoais@hotmail.com'},
  ];

  clienteSelect(cliente:Cliente)
  {
    this.clienteSelecionado = cliente;
  }  
  voltar() 
  {
    this.clienteSelecionado = ''; //criar função para botão voltar
  }
  constructor() { }

  ngOnInit(): void {
  }

}

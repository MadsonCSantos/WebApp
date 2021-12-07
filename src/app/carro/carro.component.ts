import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  
  title = 'Carro';
  
  public carro = [
    {id: 1,marca:'peugeot', modelo:'208 griff', placa:'BEP5G03', ano:'2019'},
    {id: 2,marca:'Hyunday', modelo:'HB20', placa:'RHF5G04', ano:'2018'},
    {id: 3,marca:'Jeep', modelo:'Renegade', placa:'JPK6T01', ano:'2017'},
    {id: 4,marca:'Ford', modelo:'Fordka', placa:'ERA4Z02', ano:'2017'},
    {id: 5,marca:'Volkswagen', modelo:'T-Cross', placa:'WQS3D25', ano:'2020'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}

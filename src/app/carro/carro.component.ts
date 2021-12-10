import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  
  title = 'Carro';
  public carroForm: FormGroup | undefined; //cria função de formulario
  public carroSelecionado: string | undefined; //cria função para selecionar carro
  public textSimples: string | undefined;
  public carroMarca: string | undefined;
  public carroModelo: string | undefined;
  public carroPlaca: string | undefined;
  public carroAno: string | undefined;

  public carro = [
    {id: 1,marca:'Peugeot', modelo:'208 griff', placa:'BEP5G03', ano:'2019'},
    {id: 2,marca:'Hyunday', modelo:'HB20', placa:'RHF5G04', ano:'2018'},
    {id: 3,marca:'Jeep', modelo:'Renegade', placa:'JPK6T01', ano:'2017'},
    {id: 4,marca:'Ford', modelo:'Fordka', placa:'ERA4Z02', ano:'2017'},
    {id: 5,marca:'Volkswagen', modelo:'T-Cross', placa:'WQS3D25', ano:'2020'},
  ];

  constructor(private fb: FormBuilder) 
  {
    this.criarForm();
  }

  ngOnInit(): void 
  {

  }
 
  criarForm()
  {
    this.carroForm = this.fb.group({
      marca:'',
      modelo:'',
      placa: '',
      ano:''
    });
  }
  
  carroSelect(carro:any)
  {
    this.carroSelecionado = carro.marca; //criar função para selecionar carro
    this.carroMarca = carro.marca;
    this.carroModelo = carro.modelo;
    this.carroPlaca = carro.placa;
    this.carroAno = carro.ano;
  }
  voltar() 
  {
    this.carroSelecionado = ''; //criar função para botão voltar
  }
 
}

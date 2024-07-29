import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-form-ocorrencia',
  templateUrl: './tela-form-ocorrencia.component.html',
  styleUrls: ['./tela-form-ocorrencia.component.css']
})
export class TelaFormOcorrenciaComponent implements OnInit {
  ocorrenciaForm: FormGroup;
  tiposOcorrencia = ['Tipo 1', 'Tipo 2', 'Tipo 3'];
  turnos = ['1°', '2°', '3°', 'Comercial'];
  statusProdutos = ['100% bloqueado', 'Em Análise', 'Scrap'];

  constructor(private fb: FormBuilder) {
    this.ocorrenciaForm = this.fb.group({
      codigoProduto: ['', Validators.required],
      numeroMaquina: ['', Validators.required],
      tipoOcorrencia: ['', Validators.required],
      cliente: ['', Validators.required],
      ugb: ['', Validators.required],
      responsavel: ['', Validators.required],
      operador: ['', Validators.required],
      tamanhoLote: ['', Validators.required],
      turno: ['', Validators.required],
      statusProduto: ['', Validators.required],
      arquivo: [null, Validators.required],
      observacoes: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.ocorrenciaForm.valid) {
      console.log(this.ocorrenciaForm.value);
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.ocorrenciaForm.patchValue({
      arquivo: file
    });
  }
}

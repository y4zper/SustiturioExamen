import { Component, OnInit } from '@angular/core';
import { Docente } from '../docente';
import { DocenteService } from '../docente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  docente : Docente = new Docente();

  constructor(private docenteServicio:DocenteService, private router:Router){

  }
  ngOnInit(): void {
    
  }
  guardarDocente(){
    this.docenteServicio.registrarDocente(this.docente).subscribe(dato => {
      console.log(dato); 
      this.volverLista();
    })
    
  }

  volverLista(){
    this.router.navigate(['/docente']);
  }

 
  onSubmit(){
    this.guardarDocente();
  }
}

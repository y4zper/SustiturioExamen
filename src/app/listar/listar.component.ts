import { Router } from '@angular/router';
import { Docente } from '../docente';
import { DocenteService } from '../docente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
 
  
  listaDocente:Docente[]

  constructor(private docenteServicio:DocenteService, private router:Router){}

  ngOnInit(): void {
    this.obtenerDocentes();
  }


  actualizarDocente(iddocente:number){
    this.router.navigate(['actualizar-docente',iddocente]);
  }

  eliminarDocente(iddocente:number){
    this.docenteServicio.eliminarDocente(iddocente).subscribe(dato =>{
      this.obtenerDocentes
    });
  }


  private obtenerDocentes(){
    this.docenteServicio.obtenerListaDocentes().subscribe(dato => {
      this.listaDocente = dato;
    });
  }
}

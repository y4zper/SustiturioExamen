import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [

  {path : 'docente' , component:ListarComponent},
  {path : '', redirectTo:'docente', pathMatch:'full'},
  {path : 'docente-registrar', component:CreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

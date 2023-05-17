import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


//Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';



const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"about", component:AboutComponent},
    {path:"contact", component:ContactComponent},
    {path:"services", component:ServicesComponent},
    
]; 


// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutUsComponent } from './about/components/about-us/about-us.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { UnitTestingDemoComponent } from './unit-testing-demo/components/unit-testing-demo/unit-testing-demo.component';

// Let's config the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees/employees.module').then(
        m => m.EmployeesModule
      )
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then(m => m.ProductsModule)
  },
  { path: 'unit-testing-demo', component: UnitTestingDemoComponent }
];

// Main Entry gate
@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering routes
  exports: [RouterModule]
})
export class AppRoutingModule {}

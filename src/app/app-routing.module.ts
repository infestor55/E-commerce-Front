import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { CreateNewProductComponent } from './create-new-product/create-new-product.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BabiesShopComponent } from './shops/babies-shop/babies-shop.component';
import { ShopsListComponent } from './shops/shops-list/shops-list.component';
import { KidsShopComponent } from './shops/kids-shop/kids-shop.component';
import { MomsShopComponent } from './shops/moms-shop/moms-shop.component';
import { ChildRearingComponent } from './shops/child-rearing/child-rearing.component';
import { GamesToysComponent } from './shops/games-toys/games-toys.component';
import { FurnitureComponent } from './shops/furniture/furniture.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent},
    {path: 'login', component: LoginComponent},
  {path: 'forbiden', component: ForbidenComponent},
  { path: 'CreateNewProduct', component: CreateNewProductComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'shopsList', component: ShopsListComponent},
  { path: 'stock', component: SidebarComponent, children : [
    { path: 'babies-shop', component: BabiesShopComponent},
    { path: 'kids-shop', component: KidsShopComponent},
    { path: 'moms-shop', component: MomsShopComponent},
    { path: 'child-rearing', component: ChildRearingComponent},
    { path: 'games&toys', component: GamesToysComponent},
    { path: 'furniture', component: FurnitureComponent},
    
  ]},
  { path: 'child-rearing', component: ChildRearingComponent},
    { path: 'games&toys', component: GamesToysComponent},
    { path: 'furniture', component: FurnitureComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

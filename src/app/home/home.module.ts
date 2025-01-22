import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
];

@NgModule({
    declarations: [HomeComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule]
})
export class HomeModule {}
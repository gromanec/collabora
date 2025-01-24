import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { RegisterComponent } from "./components/register/register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuardService } from "./services/authGuard.service";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    {
        path: "register",
        component: RegisterComponent,
    },
    {
        path: "login",
        component: LoginComponent,
        //canActivate: [AuthGuardService]
    },
];

@NgModule({
    declarations: [
        RegisterComponent, 
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [AuthGuardService],
})
export class AuthModule {}
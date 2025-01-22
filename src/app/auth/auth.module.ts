import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { AuthRoutingModule } from "./auth-routing.module";
import { RegisterComponent } from "./components/register/register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";


@NgModule({
    declarations: [
        RegisterComponent, 
        LoginComponent
    ],
    imports: [
        AuthRoutingModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [AuthService],
})
export class AuthModule {}
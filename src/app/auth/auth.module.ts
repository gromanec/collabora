import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { AuthRoutingModule } from "./auth-routing.module";
import { RegisterComponent } from "./components/register/register.component";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    providers: [AuthService],
})
export class AuthModule {}
import { NgModule } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { AuthRoutingModule } from "./auth-routing.module";
import { RegisterComponent } from "./components/register/register.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [RegisterComponent],
    imports: [
        AuthRoutingModule,
        ReactiveFormsModule
    ],
    providers: [AuthService],
})
export class AuthModule {}
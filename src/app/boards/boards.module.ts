import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import { BoardsComponent } from "./components/boards/boards.component";
import { BoardsService } from "../shared/services/boards.service";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../auth/services/authGuard.service";

const routes: Routes = [
    {
        path: "boards",
        component: BoardsComponent,
        //canActivate: [AuthGuardService]
    },
];

@NgModule({
    declarations: [BoardsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    providers: [BoardsService]
})
export class BoardsModule {}
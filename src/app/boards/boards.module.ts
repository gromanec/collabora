import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import { BoardsComponent } from "./components/boards/boards.component";
import { BoardsService } from "../shared/services/boards.service";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../auth/services/authGuard.service";
import { InlineFormModule } from "../shared/modules/inlineForm/inlineForm.module";
import { TopbarModule } from "../shared/modules/topbar/topbar.module";

const routes: Routes = [
    {
        path: "boards",
        component: BoardsComponent,
        //canActivate: [AuthGuardService]
    },
];

@NgModule({
    declarations: [BoardsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), InlineFormModule, TopbarModule],
    providers: [BoardsService]
})
export class BoardsModule {}
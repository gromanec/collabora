import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import { TopbarComponent } from "./components/topbar/topbar.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [TopbarComponent],
    imports: [CommonModule, RouterModule],
    exports: [TopbarComponent]
})
export class TopbarModule {

}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HardwaresComponent } from './hardwares/hardwares.component';
import { GPStrackersComponent } from './hardwares/gpstrackers/gpstrackers.component';


const routes: Routes = [
    {
        path: "", component: MainComponent, children: [
            { path: "", component: HomepageComponent },
            { path: "hardwares", component: HardwaresComponent },
            { path: "Gpstrackers", component: GPStrackersComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
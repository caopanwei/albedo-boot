import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from "../../../layouts/layout.module";
import { GenTableComponent } from "./genTable.component";
import { AlbedoBootSharedModule } from "../../../../shared/shared.module";
import { GenTableFormComponent } from "./genTable.form.component";
import { RouterModule } from "@angular/router";
import { Principal } from "../../../../auth/_services/principal.service";
import {GenTableService} from "../../../../service/gen/genTable/genTable.service";
import {GenSchemeFormComponent} from "../genScheme/genScheme.form.component";
import {GenSchemeComponent} from "../genScheme/genScheme.component";
import {routeChilds} from "../../../api.routing.module";

const routesGenTable = [
    {
        path: "gen/genTable/list",
        component: GenTableComponent
    },
    {
        path: "gen/genTable/form",
        component: GenTableFormComponent
    },
    {
        path: "gen/genTable/form/:id",
        component: GenTableFormComponent
    },
]
routeChilds.push(...routesGenTable)

@NgModule({
    imports: [
        AlbedoBootSharedModule,
        CommonModule,
        RouterModule,
        // RouterModule.forChild(routes),
        LayoutModule
    ], exports: [
        GenTableComponent,
        // RouterModule
    ], entryComponents: [
        GenTableComponent,
    ], declarations: [
        GenTableComponent,
        GenTableFormComponent,
    ], providers: [
        GenTableService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GenTableModule {



}

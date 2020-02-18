import { NgModule } from '@angular/core';
import { ApplicationViewComponent} from './application-view.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PanelModule } from 'primeng/panel';
import { ApplicationChartComponent } from './application-chart/application-chart.component';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
    imports: [
        ApplicationRoutingModule,
        TableModule,
        FormsModule,
        CommonModule,
        NgbModule,
        PanelModule,
        Ng2Charts,
        DropdownModule,
        ButtonModule
    ],
    declarations: [ApplicationViewComponent, ApplicationChartComponent]
})
export class ApplicationViewModule {}

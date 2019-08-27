import { NgModule } from '@angular/core'
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';



const materials = [
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatStepperModule

];

@NgModule({
    imports: [materials],
    exports:[materials]      
})
export class MaterialModule{}

import { NgModule } from '@angular/core';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
    declarations: [LeftNavComponent, LayoutComponent],
    providers: [],
    imports: [SharedModule],
    exports: [LeftNavComponent, LayoutComponent],
})
export class CoreModule { }

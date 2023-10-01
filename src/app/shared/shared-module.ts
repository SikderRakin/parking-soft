import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from './material.module';
import { LeftNavComponent } from '../core/components/left-nav/left-nav.component';
import { LayoutComponent } from '../core/components/layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    providers: [],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialsModule,

    ],
    exports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialsModule,
        RouterModule,

    ],
})
export class SharedModule { }

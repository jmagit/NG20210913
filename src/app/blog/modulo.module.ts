import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent, BLOG_COMPONENTES } from './componente.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {EditorModule} from 'primeng/editor';
import {InplaceModule} from 'primeng/inplace';
import { MyCoreModule } from 'src/my-core';
import { CommonServicesModule } from '../common-services';

@NgModule({
  declarations: [
    BLOG_COMPONENTES
  ],
  exports: [
    // BLOG_COMPONENTES
    BlogComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule,
    EditorModule, InplaceModule,
  ]
})
export class BlogModule { }

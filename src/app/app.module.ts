import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainTemplate } from './template/main/main.template';
import { RegisterTemplate } from './template/register/register.template';
import { LoginTemplate } from './template/login/login.template';
import { C404Template } from './template/c404/c404.template';
import { HttpClientModule } from '@angular/common/http';
import { MainContentTemplate } from './template/main/main-content/main-content.template';
import { CategoriesTemplate } from './template/categories/categories.template';
import { GraphicLogin } from './@shared/components/graphics/graphic-login/graphic-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { ComponentsModule } from './@shared/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ParallaxDirective } from './@shared/directives/parallax.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginTemplate,
    RegisterTemplate,
    C404Template,
    MainTemplate,
    MainContentTemplate,
    CategoriesTemplate,
    GraphicLogin,
    DropdownDirective,
    ParallaxDirective
  ],
  imports: [
    RouterModule.forRoot(appRouting, {onSameUrlNavigation: 'reload'}),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

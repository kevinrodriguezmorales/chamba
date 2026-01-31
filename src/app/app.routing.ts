import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTemplate } from './template/main/main.template';
import { MainContentTemplate } from './template/main/main-content/main-content.template';
import { CategoriesTemplate } from './template/categories/categories.template';

import { LoginTemplate } from './template/login/login.template';
import { RegisterTemplate } from './template/register/register.template';
import { C404Template } from './template/c404/c404.template';

const appRouters: Routes = [
  {
    path: '',
    component: MainTemplate,
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        component: MainContentTemplate,
        data: {
          title: 'Bienvenido'
        }
      },
      {
        path: 'categories',
        component: CategoriesTemplate
      },
      {
        path: 'single-category/:categoryID/:categoryName/:categoryImage',
        loadChildren: () => import('./template/single-category/single-category.module').then(m => m.SingleCategoryModule)
      },
      {
        path: 'worker/:userID',
        loadChildren: () => import('./template/worker/worker.module').then(m => m.WorkerModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginTemplate
  },
  {
    path: 'register',
    component: RegisterTemplate
  },
  {
    path: '**',
    component: C404Template
  }

];

export const appRouting: any[] = appRouters;
// export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);

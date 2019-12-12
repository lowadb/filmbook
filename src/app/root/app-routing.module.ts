import {NgModule} from '@angular/core';
import {PreloadingStrategy, Route, RouterModule, Routes} from '@angular/router';
import {Observable, of, timer} from 'rxjs';
import {flatMap} from 'rxjs/operators';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/main-page/main-page.module').then(module => module.MainPageModule),
    data: {preload: true, delay: 2000}
  },
  {
    path: 'book/:id',
    loadChildren: () => import('../pages/book-page/book-page.module').then(module => module.BookPageModule),
    data: {preload: true, delay: 2000}
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

export class AppPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const loadRoute = (delay) => (!!delay)
      ? timer((typeof delay === 'number') ? delay : 1000).pipe(flatMap(_ => load()))
      : load();
    return route.data && route.data.preload ? loadRoute(route.data.delay) : of(null);
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: AppPreloadingStrategy})],
  providers: [AppPreloadingStrategy],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

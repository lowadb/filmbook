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
    path: 'film/:id',
    loadChildren: () => import('../pages/film-page/film-page.module').then(module => module.FilmPageModule),
    data: {preload: true, delay: 3000}
  },
  {
    path: 'error',
    loadChildren: () => import('../pages/error-page/error-page.module').then(module => module.ErrorPageModule),
    data: {preload: true, delay: 4000}
  },
  {
    path: 'favorite',
    loadChildren: () => import('../pages/favorite-page/favorite-page.module').then(module => module.FavoritePageModule),
    data: {preload: true, delay: 5000}
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

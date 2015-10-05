import {View, Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';

@Component({ selector: 'my-app' })
@View({
  template: `
    <h1>{{title}}</h1>
    <a [router-link]="['/${Routes.dashboard.as}']" class="router-link">Dashboard</a>
    <a [router-link]="['/${Routes.heroes.as}']" class="router-link">Heroes</a>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .router-link {padding: 5px;text-decoration: none;}
    .router-link:visited {color: #444;}
    .router-link.router-link-active {color: white; background-color: #52b9e9; text-decoration: none;}
  `],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
  public title = 'Tour of Heroes';
}

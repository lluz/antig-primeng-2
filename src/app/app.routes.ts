import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Page2 } from './pages/page2/page2';
import { Page3 } from './pages/page3/page3';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'page2', component: Page2 },
    { path: 'page3', component: Page3 }
];

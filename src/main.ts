import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from "./app/store/counter.reducer";

bootstrapApplication(AppComponent, {
    providers: [provideStore({
        counter: counterReducer
    })]
}).then();


/*
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
*/
export class TriviaStatesDetailsService {
    private isMobile;
    private mobileLimit = 768;

    checkDevice() {
        if (window.document.documentElement.clientWidth < this.mobileLimit) {
            this.isMobile = true;
        }
    }

    getIsMobile() {
        return this.isMobile;
    }

}
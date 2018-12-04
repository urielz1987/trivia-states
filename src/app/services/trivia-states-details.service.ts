
/*
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
*/
export class TriviaStatesDetailsService {
    private isMobile;
    private mobileLimit = 768;
    private isMuted = false;

    constructor() {
        this.isMuted = localStorage.getItem('isMuted') == "true";
    }

    checkDevice() {
        if (window.document.documentElement.clientWidth < this.mobileLimit) {
            this.isMobile = true;
        }
    }

    getIsMobile() {
        return this.isMobile;
    }

    public toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            localStorage.setItem('isMuted', 'true');
        } else {
            localStorage.setItem('isMuted', 'false'); 
        }
    }

    public getIsMuted() {
        return this.isMuted;
    }

}
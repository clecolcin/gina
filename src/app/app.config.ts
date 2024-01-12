import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"gina0929","appId":"1:687756819668:web:f98e5c15b9b43b2d880f41","storageBucket":"gina0929.appspot.com","apiKey":"AIzaSyDX9p7OFke_DEmpKve-njQghscfxdKlpiY","authDomain":"gina0929.firebaseapp.com","messagingSenderId":"687756819668","measurementId":"G-09KR59YDY2"}))), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService]
};

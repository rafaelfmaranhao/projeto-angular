import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { 
  LucideAngularModule, 
  Code, 
  Flame, 
  Instagram, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Github, 
  ArrowRight, 
  LogOut, 
  LogIn,
  SquareMenu
} from 'lucide-angular'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ Code, Flame, Instagram, Phone, Mail, MapPin, Facebook, Github, ArrowRight, LogOut, LogIn, SquareMenu }))
  ]
};

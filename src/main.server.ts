import { AppComponent } from './app/app';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()]
};

const bootstrap = () =>
  bootstrapApplication(AppComponent, mergeApplicationConfig({ providers: [] }, serverConfig));

export default bootstrap;
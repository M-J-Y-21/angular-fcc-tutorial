import { Injectable } from '@angular/core';

export class LoggerService {
  constructor() {}

  log(message: string) {
    console.log(message);
  }
}

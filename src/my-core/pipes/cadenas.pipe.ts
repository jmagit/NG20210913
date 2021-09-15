import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elipsis'
})
export class ElipsisPipe implements PipeTransform {
  transform(value: any, maxlen: number): any {
    return (!maxlen || maxlen < 2 || !value || value.length <= maxlen) ? value : (value.substr(0, maxlen - 1) + '\u2026');;
  }
}

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.replace(/[^\s]+/g, (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase());
  }
}

export const PIPES_CADENAS = [ ElipsisPipe, CapitalizePipe, ]

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameLen',
  standalone: false
})
export class NameLenPipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(0, 20) + '...';
  }

}

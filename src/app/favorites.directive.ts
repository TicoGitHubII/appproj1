import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFavorites]'
})
export class FavoritesDirective {
@HostBinding ('class.is-favorite') isFavorite = true;
  constructor() { }

}

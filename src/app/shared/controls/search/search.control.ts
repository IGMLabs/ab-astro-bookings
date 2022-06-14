import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  Observable,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.control.html',
  styleUrls: ['./search.control.css'],
})
export class SearchControl implements OnInit {
  @ViewChild('searchInput', { static: true }) public searchInput!: ElementRef;

  @Output() search = new EventEmitter<string>();

  public searchInput$!: Observable<string>;

  constructor() {}

  ngOnInit(): void {
    this.searchInput$ = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event) => (event as any).target.value),
      tap((searchTerm) => console.log('antes:', searchTerm)),
      debounceTime(1000),
      tap((searchTerm) => console.log('después: ', searchTerm)),
      filter((searchText) => searchText.length > 2),
      tap((searchTerm) => console.log('filtrado: ', searchTerm)),
      distinctUntilChanged(),
      tap((searchTerm) => console.log('cambiado: ', searchTerm)),
      tap((searchTerm) => this.search.emit(searchTerm))
    );
  }
}

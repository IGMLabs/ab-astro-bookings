import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Agency } from 'src/app/core/api/agency.interface';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css'],
})
export class AgenciesList implements OnInit {
  @Input() public agencies: Agency[] = [];
  @Output() private reload = new EventEmitter();

  public reloading = false;

  public onReloadClick(list: string) {
    this.reloading = true;
    console.log('Reloading...' + list);
    this.reload.emit();
  }

  public getAgenciesLength() {
    return this.agencies.length;
  }

  ngOnInit(): void {}
}

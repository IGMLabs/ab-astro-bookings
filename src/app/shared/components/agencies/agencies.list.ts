import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private route: ActivatedRoute) {}

  public onReloadClick(list: string) {
    this.reloading = true;
    console.log('Reloading...' + list);
    this.reload.emit();
  }

  public getAgenciesLength() {
    return this.agencies.length;
  }

  public onSearchClick(agencyId: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: agencyId },
      queryParamsHandling: 'merge',
    });
  }

  ngOnInit(): void {}
}

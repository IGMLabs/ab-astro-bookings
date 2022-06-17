import { Component } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public newVersion = '';

  constructor(swUpdate: SwUpdate) {
    swUpdate.versionUpdates.subscribe((event: VersionEvent) => {
      if (event.type === 'VERSION_READY') {
        this.newVersion = event.latestVersion.appData
          ? JSON.stringify(event.latestVersion.appData)
          : event.latestVersion.hash;
      }
    });
    swUpdate.checkForUpdate();
  }
  public onReload() {
    window.location.reload();
  }
}

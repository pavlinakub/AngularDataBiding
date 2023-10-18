import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'data-biding';
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];

  onServerAdded(serverData: { serverName: string; serverContetn: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContetn,
    });
  }
  onBlueprintAdded(serverData: { serverName: string; serverContetn: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContetn,
    });
  }
  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}

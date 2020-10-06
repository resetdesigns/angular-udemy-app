import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'test server';
  serverCreated = false;
  userName = '';
  servers = ['Testserver', 'Testserver 2'];
  displayDetails = false;
  log = [];
  detailsMsg = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! The server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetName() {
    this.userName = '';
  }

  onDisplayDetails(event: Event) {
    this.displayDetails = !this.displayDetails;
    let timestamp = event.timeStamp;
    this.log.push(this.log.length + 1);
    this.detailsMsg = 'created at ' + event.timeStamp;
    console.log(event.timeStamp);
  }
}

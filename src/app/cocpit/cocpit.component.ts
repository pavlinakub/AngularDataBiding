import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cocpit',
  templateUrl: './cocpit.component.html',
  styleUrls: ['./cocpit.component.css'],
})
export class CocpitComponent implements OnInit {
  ngOnInit(): void {}
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContetn: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContetn: string;
  }>();

  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput', { static: false })
  serverContentInput!: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    //console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContetn: this.serverContentInput.nativeElement.value,
    });
  }
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContetn: this.serverContentInput.nativeElement.value,
    });
  }
}

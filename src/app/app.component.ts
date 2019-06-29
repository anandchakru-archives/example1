import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'nivite-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('container', { static: false }) container: ElementRef;
  loaded: boolean;
  invite;
  carousalReady: boolean;

  ngOnInit() {
    document.addEventListener('niviteLoaded', (event) => {
      this.invite = ((event as CustomEvent).detail);
      this.loaded = true;
    });
  }
  onCarouseliReady() {
    this.carousalReady = true;
  }
  action(): string {
    if (this.invite.customerInvite) {
      switch (this.invite.customerInvite.rsvp) {
        case 'Y':
        case 'N':
        case 'M':
          return 'You have already responded ';
        default:
          return 'Respond to the invitation.';
      }
    } else {
      return 'Respond to the invitation.';
    }
  }
  public navigate() {
    this.talkToNivite('niviteNavigate', {});
  }
  public addToCalendar() {
    this.talkToNivite('niviteShowAddToCalendarModal', {});
  }
  public rsvp() {
    this.talkToNivite('niviteShowRsvpModal', { changeEmail: false });
  }
  public changeEmailAddress() {
    this.talkToNivite('niviteShowRsvpModal', { changeEmail: true });
  }
  private talkToNivite(eventId, data) {
    const customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(eventId, true, false, data);
    (this.container.nativeElement as HTMLDivElement).dispatchEvent(customEvent);
  }
}

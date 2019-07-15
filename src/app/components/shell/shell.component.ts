import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(private media: MediaObserver) {}

  ngOnInit() {
    // Automatically close side menu on screens > sm breakpoint
    this.media.media$
      .pipe(filter((change: MediaChange) => change.mqAlias !== 'xs' && change.mqAlias !== 'sm'))
      .subscribe(() => this.sidenav.close());
  }

  scrollToElementByID(id: string): void {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}

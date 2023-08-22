import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from '@model/menuItem.model';
import { MatSidenav} from '@angular/material/sidenav'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { delay, filter } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  menu : MenuItem[] = [
    {
      title : 'VPN',
      link: '/search/vpn',
      icon: 'shield-outline'
    },
    {
      title: 'Firewall',
      link: '/search/firewall',
      icon: 'alert-triangle-outline'
    },
    {
      title: 'IAM',
      link: '/search/iam',
      icon: 'person-outline'
    }
  ];

  @ViewChild(MatSidenav)
  sidenav! :MatSidenav;

  @ViewChild(MatSidenav)
  sidenavAdmin! :MatSidenav;
  
  isUserLoggedOn: boolean = false;

  constructor(private observer : BreakpointObserver) {
   }

  ngOnInit(): void {
    this.isUserLoggedOn = false;
  }

  ngAfterViewInit(){
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

  }

}

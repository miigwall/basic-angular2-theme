import { Component, Directive, OnChanges, OnDestroy, AfterContentInit, QueryList, ChangeDetectorRef, ContentChildren, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router, RouterLink, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { HttpService } from '../services/http.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent {
  public q: string
  public mainMenuItems: any[]

  constructor(
    private router: Router, 
    private httpService: HttpService
  ){}

  ngOnInit() {
    this.getMainMenu() 
  }

  getMainMenu() {
    this.httpService.get('basic-angular2-theme/v1/menu-locations/main-menu', (data) => {
      console.log(data)
      this.mainMenuItems = data
    })
  }

  onSearchSubmit(f: NgForm) {
  	if (f.value.searchq) {
  	   // this.router.navigate([ '/search/', f.value.searchq ]);
  	}
  }
}
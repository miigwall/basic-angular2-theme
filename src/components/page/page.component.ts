import { Component, Pipe } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { Router, ActivatedRoute } from '@angular/router'
import { HttpService } from '../../services/http.service' 

@Component({
  selector: 'app-root',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent {
  private title = 'app'
  private sub: any
  private pageId: string
  public pageData: any
  public loaded: boolean = false

  constructor(
  	private router: Router,
  	private route: ActivatedRoute, 
  	private httpService: HttpService,
    private sanitizer: DomSanitizer
  ){}

  ngOnInit() {
  	this.loaded = false
  	this.sub = this.route.params.subscribe(params => {
  		this.httpService.get('basic-angular2-theme/v1/get/page/' + params['pageId'], (pageData) => {
  			this.loaded = true
  			if (pageData.length > 0) {
          this.pageData = pageData[0]
          this.pageData.post_content = this.sanitizer.bypassSecurityTrustHtml(this.pageData.post_content)
  			} else {
  				this.router.navigate([ '/notfound' ]);
  			}
  		})
  	})
  }
}
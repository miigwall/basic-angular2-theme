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
  	private httpService: HttpService
  ){}

  ngOnInit() {
  	this.loaded = false
  	this.sub = this.route.params.subscribe(params => {
  		this.httpService.get('wp/v2/pages?slug=' + params['pageId'], (pageData) => {
  			this.loaded = true
  			if (pageData.length > 0) {
  				this.pageData = pageData[0]
  				console.log(pageData[0])
  			} else {
  				this.router.navigate([ '/notfound' ]);
  			}
  		})
  	})
  }
}
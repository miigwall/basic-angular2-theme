import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
	constructor(private http: HttpClient) {}

	get(endpoint, callback) {
		this.http.get('/wp-json/' + endpoint).subscribe(data => {
			callback(data)
		})
	}
}
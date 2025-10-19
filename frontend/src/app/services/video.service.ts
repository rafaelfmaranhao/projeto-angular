import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class VideoService {
    private apiUrl = 'http://localhost:3000/api/video-info';

    constructor(private http: HttpClient) {}

    getVideoInfo(url: string): Observable<any> {
        return this.http.get(`${this.apiUrl}?url=${encodeURIComponent(url)}`);
    }
}
import {Component} from '@angular/core';
import {UserService} from './user.service';
import {HTTP_PROVIDERS} from '@angular/http';
import {OnInit} from '@angular/core';
import {Post} from './post';
import {JSONP_PROVIDERS, Jsonp} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [UserService, HTTP_PROVIDERS, JSONP_PROVIDERS]
})



export class AppComponent implements OnInit{
    title = "chem.com"
    isLoading = true; 
    public posts: Array<Post>;

    constructor(private _postService: UserService){
      // this._postService.createPost({userId:1, title: "a", body: "b"})
    }
    ngOnInit(){
        this._postService.getPosts()
            .subscribe(posts => {
                this.isLoading = false;
                this.posts = posts;
            });
    }
}
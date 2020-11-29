import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ColourSchemeService } from "./theme/colour-scheme.service";
import { authRoute, unauthorisedRoute, authorisedRoute } from '../environments/environment';
import { AnchorService } from '@shared/anchor/anchor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit
{
  title = 'blog';

  constructor(
    public auth: AngularFireAuth,
    private anchorService: AnchorService,
    private router: Router,
    private colorSchemeService: ColourSchemeService)
  {
    this.colorSchemeService.load();
  }

  ngOnInit(): void
  {
//     this.auth.authState.subscribe(user => {
//       if (!this.router.url.startsWith("/"+authRoute) &&
//           !this.router.url.startsWith("/"+authorisedRoute))
//       {
//         return;
//       }

//       if (user)
//       {
//         this.router.navigate([authorisedRoute]);
//       }
//       else
//       {
//         this.router.navigate([authRoute]);
//       }
//     });
  }
}

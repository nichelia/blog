import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnchorService } from '@shared/anchor/anchor.service';
import { ColourSchemeService } from "./theme/colour-scheme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
{
  title = 'app';

  constructor(
    private anchorService: AnchorService,
    private router: Router,
    private colorSchemeService: ColourSchemeService)
  {
    this.colorSchemeService.load();
  }
}

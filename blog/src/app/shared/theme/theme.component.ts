import { Component, OnInit, Input } from '@angular/core';
import { ColourSchemeService } from "./colour-scheme.service";

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit
{
  @Input() type: string = 'button';

  themeOptions: string[] = ['Light', 'Dark', 'Detect (system)'];
  themeIcons: string[] = ['brightness_5', 'brightness_2', 'brightness_4'];
  selectedOption: string = '';
  selectedIcon: string = '';

  constructor(private colorSchemeService: ColourSchemeService) { }

  ngOnInit(): void
  {
    const scheme: string = this.colorSchemeService.getScheme();
    if (scheme === "light")
    {
      this.selectedOption = this.themeOptions[0];
      this.selectedIcon = this.themeIcons[0];
    }
    else if (scheme === "dark")
    {
      this.selectedOption = this.themeOptions[1];
      this.selectedIcon = this.themeIcons[1];
    }
    else
    {
      this.selectedOption = this.themeOptions[2];
      this.selectedIcon = this.themeIcons[2];
    }
  }

  private _changeTheme(themeSelected)
  {
    this.selectedOption = themeSelected;

    if (this.selectedOption === "Light")
    {
      this.colorSchemeService.updateScheme("light");
      this.selectedIcon = this.themeIcons[0];
    }
    else if (this.selectedOption === "Dark")
    {
      this.colorSchemeService.updateScheme("dark");
      this.selectedIcon = this.themeIcons[1];
    }
    else
    {
      this.colorSchemeService.getSystemScheme();
      this.selectedIcon = this.themeIcons[2];
    }
  }

  onThemeChange(selected?)
  {
    let selection: string = '';
    if (selected)
    {
      selection = selected.option.value;
    }
    else
    {
      const currentSelection = this.themeOptions.indexOf(this.selectedOption);
      selection = this.themeOptions[(currentSelection+1) % 3];
    }

    this._changeTheme(selection);
  }
}

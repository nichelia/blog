import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { MatModule } from "./mat.module";
import { AfsModule } from "./afs.module";

import { AnchorModule } from '@shared/anchor/anchor.module';
import { AnchorService } from '@shared/anchor/anchor.service';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { ThemeComponent } from './theme/theme.component';

export function markedOptionsFactory(anchorService: AnchorService): MarkedOptions {
  const renderer = new MarkedRenderer();

  // fix `href` for absolute link with fragments so that _copy-paste_ urls are correct
  renderer.link = (href: string, title: string, text: string) => {
    return MarkedRenderer.prototype.link.call(renderer, anchorService.normalizeExternalUrl(href), title, text);
  };

  return { renderer };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    MenuComponent,
    NotFoundComponent,
    PostComponent,
    ThemeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    DragDropModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
        deps: [AnchorService],
      },
      sanitize: SecurityContext.NONE,
    }),
    MatModule,
    AfsModule,
    AnchorModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {XHRBackend, RequestOptions, Http, HttpModule} from "@angular/http";
import {JsonHttp} from "./services/json-http";
import {Optional, SkipSelf} from "@angular/core";
import {UserService} from "./services/user.service";


export function createJsonHttp(xhrBackend: XHRBackend, requestOptions: RequestOptions) {
  const ngHttp = new Http(xhrBackend, requestOptions);
  return new JsonHttp(ngHttp);
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    {
      provide: JsonHttp,
      useFactory: createJsonHttp,
      deps: [XHRBackend, RequestOptions]
    },
    UserService
  ],
  declarations: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}

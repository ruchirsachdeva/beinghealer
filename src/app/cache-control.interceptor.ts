import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CacheControlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        // Check if the event is an HttpResponse
        if (event instanceof HttpResponse) {
          // You can access the headers of the response here
          const headers = event.headers;

          // Clone and modify the response to ensure that specific client-side headers match the server's response headers.
          // This is particularly useful in scenarios where certain headers must be aligned between client and server,
          // such as caching headers to ensure consistent behavior across different browser environments.
          // In server we add no cache header for error response 4xx and 5xx, we want that to be passed on in angular response as well

          const modifiedResponse = event.clone({
            // Here, you can set headers based on the server's response headers
            // For example, to set the 'Cache-Control' header based on the server's header:
            headers: headers.set('Cache-Control', headers.get('Cache-Control') || 'default-value')
          });

          return modifiedResponse;
        }

        // If the event is not an HttpResponse, return it unchanged
        return event;
      })
    );
  }
}

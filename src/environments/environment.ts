// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  localServer: "http://localhost:8080/api/",
  // bootServer: "http://localhost:80/"
  //  bootServer: "https://ec2-43-205-119-73.ap-south-1.compute.amazonaws.com:8443/" ec2 instance
  // https://beinghealer-ec2-alb-121141269.ap-south-1.elb.amazonaws.com/ load balancer
  // CNAME record created for server with value as the load balancer url, so that we can use an ACM certificate with CN server.beinghealer.com
   bootServer: "https://server.beinghealer.com/" // routes to the load balancer url
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

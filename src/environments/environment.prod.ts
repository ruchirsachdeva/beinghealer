export const environment = {
  production: true,
  localServer: "http://localhost:8080/api/",
  // bootServer: "http://beinghealerserver-env.eba-nzacycyz.ap-south-1.elasticbeanstalk.com"
  //  bootServer: "https://ec2-43-205-119-73.ap-south-1.compute.amazonaws.com:8443/" ec2 instance
  // https://beinghealer-ec2-alb-121141269.ap-south-1.elb.amazonaws.com/ load balancer
  // CNAME record created for server with value as the load balancer url, so that we can use an ACM certificate with CN server.beinghealer.com
  bootServer: "https://server.beinghealer.com/" // routes to the load balancer url
};

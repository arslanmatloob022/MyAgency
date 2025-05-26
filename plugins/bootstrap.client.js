// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "jquery/dist/jquery.min.js";
// import "popper.js/dist/umd/popper.min.js";
import * as bootsrtap from "bootstrap";

export default defineNuxtPlugin(nuxtApp => {
  // now available on `nuxtApp.$injected`
  nuxtApp.provide('bootstrap', () => bootstrap)
  // You can alternatively use this format, which comes with automatic type support
  // return {
  //   provide: {
  //     injected: () => bootsrtap
  //   }
  // }
})
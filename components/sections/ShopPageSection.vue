<script setup lang="ts">

</script>

<template>
  <section class="shop-page-section fix section-padding">
    <div class="container">
      <div class="row g-4">
        <div class="col-xl-3 col-lg-4 order-2 order-md-1">
          <div class="shop-main-sidebar">
            <div class="single-sidebar-widget">
              <div class="wid-title">
                <h4>search here</h4>
              </div>
              <div class="search_widget">
                <form action="#">
                  <input type="text" placeholder="search here">
                  <button type="submit"><i class="fal fa-search"></i></button>
                </form>
              </div>
            </div>
            <div class="single-sidebar-widget">
              <div class="wid-title">
                <h4>Filter By Price</h4>
              </div>
              <div class="range__barcustom">
                <div class="slider">
                  <div class="progress" style="left: 25%; right: 25%;"></div>
                </div>
                <div class="range-input">
                  <input type="range" class="range-min" min="0" max="10000" value="2500">
                  <input type="range" class="range-max" min="100" max="10000" value="7500">
                </div>
                <div class="range-items">
                  <div class="price-input d-flex">
                    <div class="field">
                      <span>$</span>
                      <input type="number" class="input-min" value="100">
                    </div>
                    <div class="separators">-</div>
                    <div class="field">
                      <span>$</span>
                      <input type="number" class="input-max" value="1000">
                    </div>
                    <NuxtLink to="/shop/details" class="theme-btn border-radius-none">Filter</NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="single-sidebar-widget">
              <div class="wid-title">
                <h4>filter by Rating</h4>
              </div>
              <div class="filter-size">
                <label class="checkbox-single d-flex align-items-center">
                                    <span class="d-flex gap-xl-3 gap-2 align-items-center">
                                        <span class="checkbox-area d-center">
                                            <input type="checkbox">
                                            <span class="checkmark d-center"></span>
                                        </span>
                                        <span class="text-color">
                                            <span class="star">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </span>
                                            ( 5 Star )
                                        </span>
                                    </span>
                </label>
                <label class="checkbox-single">
                                    <span class="d-flex gap-xl-3 gap-2 align-items-center">
                                        <span class="checkbox-area d-center">
                                            <input type="checkbox" checked="checked">
                                            <span class="checkmark d-center"></span>
                                        </span>
                                        <span class="text-color">
                                            <span class="star">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star color-2"></i>
                                            </span>
                                            ( 4 Star )
                                        </span>
                                    </span>
                </label>
                <label class="checkbox-single d-flex align-items-center">
                                    <span class="d-flex gap-xl-3 gap-2 align-items-center">
                                        <span class="checkbox-area d-center">
                                            <input type="checkbox">
                                            <span class="checkmark d-center"></span>
                                        </span>
                                        <span class="text-color">
                                            <span class="star">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star color-2"></i>
                                                <i class="fas fa-star color-2"></i>
                                            </span>
                                            ( 3 Star )
                                        </span>
                                    </span>
                </label>
                <label class="checkbox-single d-flex align-items-center">
                                    <span class="d-flex gap-xl-3 gap-2 align-items-center">
                                        <span class="checkbox-area d-center">
                                            <input type="checkbox">
                                            <span class="checkmark d-center"></span>
                                        </span>
                                        <span class="text-color">
                                            <span class="star">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star color-2"></i>
                                                <i class="fas fa-star color-2"></i>
                                                <i class="fas fa-star color-2"></i>
                                            </span>
                                            ( 2 Star )
                                        </span>
                                    </span>
                </label>
                <label class="checkbox-single d-flex align-items-center">
                                    <span class="d-flex gap-xl-3 gap-2 align-items-center">
                                        <span class="checkbox-area d-center">
                                            <input type="checkbox">
                                            <span class="checkmark d-center"></span>
                                        </span>
                                        <span class="text-color">
                                            <span class="star">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star color-2"></i>
                                                <i class="fas fa-star color-2"></i>
                                                <i class="fas fa-star color-2"></i>
                                                <i class="fas fa-star color-2"></i>
                                            </span>
                                            ( 1 Star )
                                        </span>
                                    </span>
                </label>
              </div>
            </div>
            <div class="single-sidebar-widget">
              <div class="wid-title">
                <h4>Filter by Tag</h4>
              </div>
              <div class="shop-widget-tag">
                <span>Airpods</span>
                <span>Watch</span>
                <span>Charger</span>
                <span>Head Phone</span>
                <span>landing</span>
                <span>Brochure</span>
                <span>Iphone 16 Pro Max</span>
                <span>Cap</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9 col-lg-8 order-1 order-md-2">
          <div class="woocommerce-notices-wrapper wow fadeInUp" data-wow-delay=".3s">
            <p>Showing <span>12</span> of 21 Results</p>
            <div class="form-clt">

              <div class="icon">
                <NuxtLink to="/shop/shop"><i class="fas fa-list"></i></NuxtLink>
              </div>
              <div class="icon-2">
                <NuxtLink to="/shop/shop"><i class="fas fa-th-large"></i></NuxtLink>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div class="product-box-items">
                <div class="product-image">
                  <img src="@/assets/img/product/01.jpg" alt="img">
                  <ul class="product-icon d-grid align-items-center">
                    <li>
                      <NuxtLink to="/shop-cart"><i class="fa-sharp fa-regular fa-eye"></i></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-cart">
                        <i class="fa-regular fa-star"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-detatml"><i class="fa-regular fa-arrow-up-arrow-down"></i></NuxtLink>
                    </li>
                  </ul>
                  <div class="shop-btn">
                    <NuxtLink to="/shop-cart" class="theme-btn">Add To Cart</NuxtLink>
                  </div>
                </div>
                <div class="product-content">
                  <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="color-2 fa-solid fa-star"></i>
                  </div>
                  <h6><NuxtLink to="/shop/details">Calendar printing design</NuxtLink></h6>
                  <span>$112.00</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div class="product-box-items">
                <div class="product-image">
                  <img src="@/assets/img/product/02.jpg" alt="img">
                  <ul class="product-icon d-grid align-items-center">
                    <li>
                      <NuxtLink to="/shop-cart"><i class="fa-sharp fa-regular fa-eye"></i></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-cart">
                        <i class="fa-regular fa-star"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop/details"><i class="fa-regular fa-arrow-up-arrow-down"></i></NuxtLink>
                    </li>
                  </ul>
                  <div class="shop-btn">
                    <NuxtLink to="/shop-cart" class="theme-btn">Add To Cart</NuxtLink>
                  </div>
                </div>
                <div class="product-content">
                  <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="color-2 fa-solid fa-star"></i>
                  </div>
                  <h6><NuxtLink to="/shop/details">Calendar printing design</NuxtLink></h6>
                  <span>$112.00</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div class="product-box-items">
                <div class="product-image">
                  <img src="@/assets/img/product/03.jpg" alt="img">
                  <ul class="product-icon d-grid align-items-center">
                    <li>
                      <NuxtLink to="/shop-cart"><i class="fa-sharp fa-regular fa-eye"></i></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-cart">
                        <i class="fa-regular fa-star"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop/details"><i class="fa-regular fa-arrow-up-arrow-down"></i></NuxtLink>
                    </li>
                  </ul>
                  <div class="shop-btn">
                    <NuxtLink to="/shop-cart" class="theme-btn">Add To Cart</NuxtLink>
                  </div>
                </div>
                <div class="product-content">
                  <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="color-2 fa-solid fa-star"></i>
                  </div>
                  <h6><NuxtLink to="/shop/details">Calendar printing design</NuxtLink></h6>
                  <span>$112.00</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div class="product-box-items">
                <div class="product-image">
                  <img src="@/assets/img/product/04.jpg" alt="img">
                  <ul class="product-icon d-grid align-items-center">
                    <li>
                      <NuxtLink to="/shop-cart"><i class="fa-sharp fa-regular fa-eye"></i></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-cart">
                        <i class="fa-regular fa-star"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop/details"><i class="fa-regular fa-arrow-up-arrow-down"></i></NuxtLink>
                    </li>
                  </ul>
                  <div class="shop-btn">
                    <NuxtLink to="/shop-cart" class="theme-btn">Add To Cart</NuxtLink>
                  </div>
                </div>
                <div class="product-content">
                  <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="color-2 fa-solid fa-star"></i>
                  </div>
                  <h6><NuxtLink to="/shop/details">Calendar printing design</NuxtLink></h6>
                  <span>$112.00</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div class="product-box-items">
                <div class="product-image">
                  <img src="@/assets/img/product/05.jpg" alt="img">
                  <ul class="product-icon d-grid align-items-center">
                    <li>
                      <NuxtLink to="/shop-cart"><i class="fa-sharp fa-regular fa-eye"></i></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-cart">
                        <i class="fa-regular fa-star"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop/details"><i class="fa-regular fa-arrow-up-arrow-down"></i></NuxtLink>
                    </li>
                  </ul>
                  <div class="shop-btn">
                    <NuxtLink to="/shop-cart" class="theme-btn">Add To Cart</NuxtLink>
                  </div>
                </div>
                <div class="product-content">
                  <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="color-2 fa-solid fa-star"></i>
                  </div>
                  <h6><NuxtLink to="/shop/details">Calendar printing design</NuxtLink></h6>
                  <span>$112.00</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div class="product-box-items">
                <div class="product-image">
                  <img src="@/assets/img/product/06.jpg" alt="img">
                  <ul class="product-icon d-grid align-items-center">
                    <li>
                      <NuxtLink to="/shop-cart"><i class="fa-sharp fa-regular fa-eye"></i></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-cart">
                        <i class="fa-regular fa-star"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop/details"><i class="fa-regular fa-arrow-up-arrow-down"></i></NuxtLink>
                    </li>
                  </ul>
                  <div class="shop-btn">
                    <NuxtLink to="/shop-cart" class="theme-btn">Add To Cart</NuxtLink>
                  </div>
                </div>
                <div class="product-content">
                  <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="color-2 fa-solid fa-star"></i>
                  </div>
                  <h6><NuxtLink to="/shop/details">Calendar printing design</NuxtLink></h6>
                  <span>$112.00</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div class="product-box-items">
                <div class="product-image">
                  <img src="@/assets/img/product/07.jpg" alt="img">
                  <ul class="product-icon d-grid align-items-center">
                    <li>
                      <NuxtLink to="/shop-cart"><i class="fa-sharp fa-regular fa-eye"></i></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-cart">
                        <i class="fa-regular fa-star"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop/details"><i class="fa-regular fa-arrow-up-arrow-down"></i></NuxtLink>
                    </li>
                  </ul>
                  <div class="shop-btn">
                    <NuxtLink to="/shop-cart" class="theme-btn">Add To Cart</NuxtLink>
                  </div>
                </div>
                <div class="product-content">
                  <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="color-2 fa-solid fa-star"></i>
                  </div>
                  <h6><NuxtLink to="/shop/details">Calendar printing design</NuxtLink></h6>
                  <span>$112.00</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div class="product-box-items">
                <div class="product-image">
                  <img src="@/assets/img/product/08.jpg" alt="img">
                  <ul class="product-icon d-grid align-items-center">
                    <li>
                      <NuxtLink to="/shop-cart"><i class="fa-sharp fa-regular fa-eye"></i></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-cart">
                        <i class="fa-regular fa-star"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop/details"><i class="fa-regular fa-arrow-up-arrow-down"></i></NuxtLink>
                    </li>
                  </ul>
                  <div class="shop-btn">
                    <NuxtLink to="/shop-cart" class="theme-btn">Add To Cart</NuxtLink>
                  </div>
                </div>
                <div class="product-content">
                  <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="color-2 fa-solid fa-star"></i>
                  </div>
                  <h6><NuxtLink to="/shop/details">Calendar printing design</NuxtLink></h6>
                  <span>$112.00</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div class="product-box-items">
                <div class="product-image">
                  <img src="@/assets/img/product/13.jpg" alt="img">
                  <ul class="product-icon d-grid align-items-center">
                    <li>
                      <NuxtLink to="/shop-cart"><i class="fa-sharp fa-regular fa-eye"></i></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-cart">
                        <i class="fa-regular fa-star"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop/details"><i class="fa-regular fa-arrow-up-arrow-down"></i></NuxtLink>
                    </li>
                  </ul>
                  <div class="shop-btn">
                    <NuxtLink to="/shop-cart" class="theme-btn">Add To Cart</NuxtLink>
                  </div>
                </div>
                <div class="product-content">
                  <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="color-2 fa-solid fa-star"></i>
                  </div>
                  <h6><NuxtLink to="/shop/details">Calendar printing design</NuxtLink></h6>
                  <span>$112.00</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div class="product-box-items">
                <div class="product-image">
                  <img src="@/assets/img/product/03.jpg" alt="img">
                  <ul class="product-icon d-grid align-items-center">
                    <li>
                      <NuxtLink to="/shop-cart"><i class="fa-sharp fa-regular fa-eye"></i></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-cart">
                        <i class="fa-regular fa-star"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop/details"><i class="fa-regular fa-arrow-up-arrow-down"></i></NuxtLink>
                    </li>
                  </ul>
                  <div class="shop-btn">
                    <NuxtLink to="/shop-cart" class="theme-btn">Add To Cart</NuxtLink>
                  </div>
                </div>
                <div class="product-content">
                  <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="color-2 fa-solid fa-star"></i>
                  </div>
                  <h6><NuxtLink to="/shop/details">Calendar printing design</NuxtLink></h6>
                  <span>$112.00</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div class="product-box-items">
                <div class="product-image">
                  <img src="@/assets/img/product/02.jpg" alt="img">
                  <ul class="product-icon d-grid align-items-center">
                    <li>
                      <NuxtLink to="/shop-cart"><i class="fa-sharp fa-regular fa-eye"></i></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-cart">
                        <i class="fa-regular fa-star"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop/details"><i class="fa-regular fa-arrow-up-arrow-down"></i></NuxtLink>
                    </li>
                  </ul>
                  <div class="shop-btn">
                    <NuxtLink to="/shop-cart" class="theme-btn">Add To Cart</NuxtLink>
                  </div>
                </div>
                <div class="product-content">
                  <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="color-2 fa-solid fa-star"></i>
                  </div>
                  <h6><NuxtLink to="/shop/details">Calendar printing design</NuxtLink></h6>
                  <span>$112.00</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div class="product-box-items">
                <div class="product-image">
                  <img src="@/assets/img/product/01.jpg" alt="img">
                  <ul class="product-icon d-grid align-items-center">
                    <li>
                      <NuxtLink to="/shop-cart"><i class="fa-sharp fa-regular fa-eye"></i></NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop-cart">
                        <i class="fa-regular fa-star"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/shop/details"><i class="fa-regular fa-arrow-up-arrow-down"></i></NuxtLink>
                    </li>
                  </ul>
                  <div class="shop-btn">
                    <NuxtLink to="/shop-cart" class="theme-btn">Add To Cart</NuxtLink>
                  </div>
                </div>
                <div class="product-content">
                  <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="color-2 fa-solid fa-star"></i>
                  </div>
                  <h6><NuxtLink to="/shop/details">Calendar printing design</NuxtLink></h6>
                  <span>$112.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="page-nav-wrap pt-5 text-center">
            <ul>
              <li><a class="page-numbers" href="#">01</a></li>
              <li><a class="page-numbers" href="#">02</a></li>
              <li><a class="page-numbers" href="#">03</a></li>
              <li><a class="page-numbers" href="#"><i class="fa-solid fa-arrow-right-long"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
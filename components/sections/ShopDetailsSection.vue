<script setup lang="ts">

</script>

<template>
  <section class="shop-details-section section-padding">
    <div class="container">
      <div class="shop-details-wrapper">
        <div class="row">
          <div class="col-lg-5">
            <div class="shop-details-image">
              <div class="tab-content">
                <div id="thumb1" class="tab-pane fade show active">
                  <div class="shop-thumb">
                    <img src="@/assets/img/product/details-1.jpg" alt="img">
                  </div>
                </div>
                <div id="thumb2" class="tab-pane fade">
                  <div class="shop-thumb">
                    <img src="@/assets/img/product/details-1.jpg" alt="img">
                  </div>
                </div>
                <div id="thumb3" class="tab-pane fade">
                  <div class="shop-thumb">
                    <img src="@/assets/img/product/details-1.jpg" alt="img">
                  </div>
                </div>
                <div id="thumb4" class="tab-pane fade">
                  <div class="shop-thumb">
                    <img src="@/assets/img/product/details-1.jpg" alt="img">
                  </div>
                </div>
              </div>
              <ul class="nav mb-5">
                <li class="nav-item">
                  <a href="#thumb1" data-bs-toggle="tab" class="nav-link ps-0 active">
                    <img src="@/assets/img/product/small-details-1.jpg" alt="img">
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#thumb2" data-bs-toggle="tab" class="nav-link">
                    <img src="@/assets/img/product/small-details-2.jpg" alt="img">
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#thumb3" data-bs-toggle="tab" class="nav-link">
                    <img src="@/assets/img/product/small-details-3.jpg" alt="img">
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#thumb4" data-bs-toggle="tab" class="nav-link">
                    <img src="@/assets/img/product/small-details-4.jpg" alt="img">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="product-details-content">
              <h2 class="pb-3">Vaccum Cleaner</h2>
              <div class="star pb-3">
                <a href="#"> <i class="fas fa-star"></i></a>
                <a href="#"><i class="fas fa-star"></i></a>
                <a href="#"> <i class="fas fa-star"></i></a>
                <a href="#"><i class="fas fa-star"></i></a>
                <a href="#"><i class="fas fa-star"></i></a>
                <span>(25 Customer Review)</span>
              </div>
              <p class="mb-3">
                In today’s online world, a brand’s success lies in combining
                technological planning and social strategies to draw
                customers in–and keep them coming back
              </p>
              <div class="price-list">
                <h3>$19.99</h3>
              </div>
              <div class="cart-wrp">
                <div class="cart-quantity">
                  <form id='myform' method='POST' class='quantity' action='#'>
                    <input type='button' value='-' class='qtyminus minus'>
                    <input type='text' name='quantity' value='0' class='qty'>
                    <input type='button' value='+' class='qtyplus plus'>
                  </form>
                </div>
                <NuxtLink to="/shop/details" class="theme-btn">
                  add to cart
                </NuxtLink>
                <NuxtLink to="/shop/details" class="theme-btn">
                  Buy now
                </NuxtLink>
                <NuxtLink to="/shop/details" class="icon">
                  <i class="far fa-heart"></i>
                </NuxtLink>
                <NuxtLink to="/shop/details" class="icon">
                  <i class="far fa-share"></i>
                </NuxtLink>
              </div>
              <h6 class="details-info"><span>SKU:</span> <NuxtLink to="/shop/details">124224</NuxtLink></h6>
              <h6 class="details-info"><span>Categories:</span> <NuxtLink to="/shop/details">Crux Indoor Fast and Easy</NuxtLink></h6>
              <h6 class="details-info"><span>Tags:</span> <NuxtLink to="/shop/details">accessories, business</NuxtLink></h6>
            </div>
          </div>
        </div>
        <div class="single-tab">
          <ul class="nav mb-5">
            <li class="nav-item">
              <a href="#description" data-bs-toggle="tab" class="nav-link ps-0 active">
                <h6>Description</h6>
              </a>
            </li>
            <li class="nav-item">
              <a href="#additional" data-bs-toggle="tab" class="nav-link">
                <h6>Additional Information  </h6>
              </a>
            </li>
            <li class="nav-item">
              <a href="#review" data-bs-toggle="tab" class="nav-link">
                <h6>reviews (3)</h6>
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="description" class="tab-pane fade show active">
              <div class="description-items">
                <div class="description-content">
                  <h3>Product descriptions</h3>
                  <p class="mb-4">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.  When purchasing or selling a handcrafted painting, it's essential to have a clear understanding of these product details to make an informed decision and to provide potential buyers with a comprehensive description of the artwork. Additionally, the value and significance of a handcrafted painting can be influenced by factors like the artist's reputation, the rarity of the piece, and the demand for their work in the
                    art market.
                  </p>
                  <p>
                    When purchasing or selling a handcrafted painting, it's essential to have a clear understanding of these product details to make an informed decision and to provide potential buyers with a comprehensive description of the artwork. Additionally, the value and significance of a handcrafted painting can be influenced by factors like the artist's reputation, the rarity of the piece, and the demand for their work in the
                    art market.painting can be influenced by factors like the artist's reputation, the rarity of the piece, and the demand for their work in the
                    art market.
                  </p>
                  <div class="description-list-items d-flex justify-content-between">
                    <ul class="description-list">
                      <li>
                        Model wears:
                        <span>UK 10/ EU 38/ US 6</span>
                      </li>
                      <li>
                        Occasion:
                        <span> Lifestyle, Sport</span>
                      </li>
                      <li>
                        Country:
                        <span>Italy</span>
                      </li>
                    </ul>
                    <ul class="description-list">
                      <li>
                        Model wears:
                        <span>UK 10/ EU 38/ US 6</span>
                      </li>
                      <li>
                        Occasion:
                        <span> Lifestyle, Sport</span>
                      </li>
                      <li>
                        Country:
                        <span>Italy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="additional" class="tab-pane fade">
              <div class="table-responsive mb-15">
                <table class="table table-bordered">
                  <tbody>
                  <tr>
                    <td>Weight</td>
                    <td>240 Ton</td>
                  </tr>
                  <tr>
                    <td>Dimensions</td>
                    <td>20 × 30 × 40 cm</td>
                  </tr>
                  <tr>
                    <td>Colors</td>
                    <td>Black, Blue, Green</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div id="review" class="tab-pane fade">
              <div class="review-items">
                <div class="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                  <div class="admin-img pb-4 pb-md-0 me-4">
                    <img src="@/assets/img/review/01.jpg" alt="image">
                  </div>
                  <div class="content p-4">
                    <div class="head-content pb-1 d-flex flex-wrap justify-content-between">
                      <h5>miklos salsa<span>27June 2024 at 5.44pm</span></h5>
                      <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                    </p>
                  </div>
                </div>
                <div class="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                  <div class="admin-img pb-4 pb-md-0 me-4">
                    <img src="@/assets/img/review/02.jpg" alt="image">
                  </div>
                  <div class="content p-4">
                    <div class="head-content pb-1 d-flex flex-wrap justify-content-between">
                      <h5>Ethan Turner <span>27June 2024 at 5.44pm</span></h5>
                      <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                    </p>
                  </div>
                </div>
                <div class="admin-items d-flex flex-wrap flex-md-nowrap align-items-center pb-4">
                  <div class="admin-img pb-4 pb-md-0 me-4">
                    <img src="@/assets/img/review/03.jpg" alt="image">
                  </div>
                  <div class="content p-4">
                    <div class="head-content pb-1 d-flex flex-wrap justify-content-between">
                      <h5>Devid Miller<span>27June 2024 at 5.44pm</span></h5>
                      <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.Curabitur vulputate vestibulum Phasellus rhoncus dolor eget viverra pretium.
                    </p>
                  </div>
                </div>
                <div class="review-title mt-5 py-15 mb-30">
                  <h4>add a review</h4>
                  <div class="rate-now d-flex align-items-center">
                    <p>Rate this product? *</p>
                    <div class="star">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div class="review-form">
                  <form action="#" id="contact-form" method="POST">
                    <div class="row g-4">
                      <div class="col-lg-6">
                        <div class="form-clt">
                          <input type="text" name="name" id="name" placeholder="Full Name">
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-clt">
                          <input type="text" name="email" id="email" placeholder="email addres">
                        </div>
                      </div>
                      <div class="col-lg-12 wow fadeInUp" data-wow-delay=".8">
                        <div class="form-clt-big form-clt">
                          <textarea name="message" id="message" placeholder="message"></textarea>
                        </div>
                      </div>
                      <div class="col-lg-6 wow fadeInUp" data-wow-delay=".9">
                        <button type="submit" class="theme-btn">
                          Post Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
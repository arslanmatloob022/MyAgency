<script setup lang="ts">

</script>

<template>
  <section class="cart-section section-padding">
    <div class="container">
      <div class="main-cart-wrapper">
        <div class="row">
          <div class="col-12">
            <div class="cart-wrapper">
              <div class="cart-items-wrapper">
                <table>
                  <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="cart-item">
                    <td class="cart-item-info">
                      <img src="@/assets/img/product/cart.jpg" alt="Image">
                    </td>
                    <td class="cart-item-price">
                      $ <span class="base-price">325.00</span>
                    </td>
                    <td>
                      <div class="cart-item-quantity">
                        <span class="cart-item-quantity-amount"></span>
                        <div class="cart-item-quantity-controller">
                          <a href="#0" class="cart-increment">
                            <i class="far fa-caret-up"></i>
                          </a>
                          <a href="#0" class="cart-decrement">
                            <i class="far fa-caret-down"></i>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td class="cart-item-price">
                      $ <span class="total-price"></span>
                    </td>
                    <td class="cart-item-remove">
                      <a href="#0">
                        <i class="fas fa-times"></i>
                      </a>
                    </td>
                  </tr>

                  </tbody>
                </table>
              </div>
              <div class="cart-wrapper-footer">
                <form action="#">
                  <input type="text" name="promo-code" id="promoCode" placeholder="Promo code">
                  <button type="submit" class="theme-btn">
                    Apply Code
                  </button>
                </form>
                <NuxtLink to="/shop-cart" class="theme-btn">
                  Update Cart
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6"></div>
          <div class="col-xl-6">
            <div class="cart-pragh-box">
              <div class="cart-graph">
                <h4>Cart Total</h4>
                <ul>
                  <li>
                    <span>Subtotal</span>
                    <span>$510.00</span>
                  </li>
                  <li>
                    <span>Shipping</span>
                    <span>$10</span>
                  </li>
                  <li>
                    <span>Total</span>
                    <span>$510.00</span>
                  </li>
                </ul>
                <div class="chck">
                  <NuxtLink to="/checkout" class="theme-btn">
                    Checkout
                  </NuxtLink>
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
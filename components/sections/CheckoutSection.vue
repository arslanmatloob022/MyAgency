<script setup lang="ts">

</script>

<template>
  <section class="checkout-section fix section-padding">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form action="#" method="post">
            <div class="row g-4">
              <div class="col-md-5 col-lg-4 col-xl-3">
                <div class="checkout-radio">
                  <p class="primary-text">Select any one</p>
                  <div class="checkout-radio-wrapper">
                    <div class="checkout-radio-single">
                      <input type="checkbox" class="form-check-input" id="cCard" name="pay-method" value="Credit/Debit Cards">
                      <label for="cCard">Credit/Debit Cards</label>
                    </div>
                    <div class="checkout-radio-single">
                      <input type="checkbox" class="form-check-input" id="paypal" name="pay-method" value="PayPal">
                      <label for="paypal">PayPal</label>
                    </div>
                    <div class="checkout-radio-single">
                      <input type="checkbox" class="form-check-input" id="payoneer" name="pay-method" value="Payoneer">
                      <label for="payoneer">Payoneer</label>
                    </div>
                    <div class="checkout-radio-single">
                      <input type="checkbox" class="form-check-input" id="visa" name="pay-method" value="Visa">
                      <label for="visa">Visa</label>
                    </div>
                    <div class="checkout-radio-single">
                      <input type="checkbox" class="form-check-input" id="mastercard" name="pay-method" value="Mastercard">
                      <label for="mastercard">Mastercard</label>
                    </div>
                    <div class="checkout-radio-single">
                      <input type="checkbox" class="form-check-input" id="fastPay" name="pay-method" value="Fastpay">
                      <label for="fastPay">Fastpay</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-lg-8 col-xl-9">
                <div class="checkout-single-wrapper">
                  <div class="checkout-single boxshado-single">
                    <h4>Billing address</h4>
                    <div class="checkout-single-form">
                      <div class="row g-4">
                        <div class="col-lg-6">
                          <div class="input-single">
                            <input type="text" name="user-first-name" id="userFirstName" required="" placeholder="First Name">
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="input-single">
                            <input type="text" name="user-last-name" id="userLastName" required="" placeholder="Last Name">
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="input-single">
                            <input type="email" name="user-check-email" id="userCheckEmail" required="" placeholder="Your Email">
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="input-single">
                            <div class="form">
                              <select class="single-select nice-select w-100">
                                <option>USA</option>
                                <option>Aus</option>
                                <option>UK</option>
                                <option>NED</option>
                              </select>
                            </div>

                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="input-single">
                            <textarea name="user-address" id="userAddress" placeholder="Address"></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="checkout-single checkout-single-bg">
                    <h4>Payment Methods</h4>
                    <div class="checkout-single-form">
                      <p class="payment"></p>
                      <div class="row g-3">
                        <div class="col-lg-12">
                          <div class="input-single">
                            <label for="userCardNumber">Card number</label>
                            <input type="number" name="user-card-number" id="userCardNumber" placeholder="0000 0000 0000 0000">
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="input-single">
                            <label for="userCardDate">Expiry date</label>
                            <input type="text" id="userCardDate" placeholder="DD/MM/YY">
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="input-single">
                            <label for="userCvc">Cvc / Cvv</label>
                            <input type="text" maxlength="3" name="user-card-cvc" id="userCvc" required="" placeholder="3 Digits">
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <div class="input-single">
                            <label for="userCardName">Name on card</label>
                            <input type="text" name="user-card-name" id="userCardName" placeholder="Name">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="input-single input-check payment-save">
                      <input type="checkbox" class="form-check-input" name="save-for-next" id="saveForNext">
                      <label for="saveForNext">Save for my next payment</label>
                    </div>
                    <div class="mt-4">
                      <NuxtLink to="/pages/checkout" class="theme-btn bg-color-3">
                        Payment Now
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
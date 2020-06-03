<template>
  <v-app>

    <MainMenu>

      <v-btn color="primary" dark @click.stop="dialog = true">
      Cart
        <span class="btn-circle" v-if="hasProduct()">
           {{ getProductsInCart.length }}
        </span>
        <v-icon>mdi-cart</v-icon>
      </v-btn>

    </MainMenu>

    <v-content>

      <transition name="leave">
        <router-view></router-view>
      </transition>

    </v-content>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Cart</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row v-if="!hasProduct()">
              <span>No products :/</span>
            </v-row>
            <v-row v-if="hasProduct()">
              <div v-for="(product, index) in getProductsInCart"  :key="index" class="box-item">

                <v-img :src="product.image" class="item-thumb"></v-img>

                <h3 class="item-name">{{ product.name }}</h3>
                <span class="item-amount">Amount: 1</span>
                <span class="item-price">R$ {{ product.price }}, 00</span>
              </div>
            </v-row>
          </v-container>
          <v-container>
            <v-row v-if="hasProduct()">
              <v-spacer></v-spacer>
            <span>Total: <strong>R$ {{ totalPrice() }}, 00</strong></span>
          </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <div class="cart-info" v-if="hasProduct()">

            <router-link to="/checkout">
              <v-btn color="primary" dark @click.native="gotoCheckout()">
                View cart
              </v-btn>
            </router-link>
          </div>

        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MainMenu from '@/components/Menu';

export default {
  name: 'App',

  components: {
    MainMenu
  },

  data () {
    return {
      dialog: false,
    }
  },

  methods: {
    ...mapActions([
      'showOrHiddenPopupCart',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0
    },
    totalPrice() {
      return this.getProductsInCart.reduce((current, next) =>
        current + next.price, 0);
    },
    gotoCheckout() {
      this.dialog = false
      this.showOrHiddenPopupCart()
    },
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'getPopupCart',
    ]),
  },
};
</script>

<style>
.box {
    width: 400px;
    height: auto;
    background-color: #FAFAFA;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    box-sizing: border-box;
    padding: 1em .5em;
    position: absolute;
    z-index: 1;
  }

  .box:after {
    content: '';
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
    background: inherit;
    position: absolute;
    top: -15px;
    right: 15px;
  }

  .box-item {
    width: 100%;
    height: 130px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 0 .5em;
    margin-top: .3em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  .item-thumb {
    max-width: 70%;
    grid-column: 1/2;
    grid-row: 1/4;
    align-self: center;
  }

  .item-name {
    grid-column: 2/4;
    grid-row: 1/2;
    font-weight: normal;
  }

  .item-amount {
    grid-column: 2/3;
    grid-row: 2/4;
    color: #ddd;
  }

  .cart-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

<template>

  <v-card class="mx-auto my-12" max-width="800" outlined>
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">

          <v-img
            height="200"
            width="200"
            :src="currentProduct.image"
          ></v-img>
        </v-col>

        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-col class="px-0">
              <span>{{ currentProduct.name }}</span>
            </v-col>

            <v-col class="px-0">
              <span class="product-price">R$ {{ currentProduct.price }}, 00</span>
              <v-rating
              :value="currentProduct.stars"
              color="amber"
              dense
              half-increments
              readonly
              size="14">
              </v-rating>

              <span class="total-stars">{{ currentProduct.totalReviews }} reviews.</span>

            </v-col>

            <v-col class="px-0">
              <v-btn color="sucess" :cartIcon="true"
              @click.native="addProductToCart(currentProduct)">
                Buy Now
              </v-btn>
              <v-btn color="info"
                  @click.native="openModal()">
                More Info
              </v-btn>
            </v-col>

          </v-row>

        </v-col>
      </v-row>
    </v-container>

    <v-card-actions>
      <modal>{{ currentProduct.details }}</modal>
    </v-card-actions>

  </v-card>

  <!-- <div class="product-box">
    <div class="product-image">
      <img :src="currentProduct.image" alt="">
      <stars :rate="rated(currentProduct.stars)" :totalReviews="currentProduct.totalReviews"/>
    </div>
    <div class="product-info">
      <h2 class="product-title">{{ currentProduct.name }}</h2>
      <span class="product-price">R$ {{ currentProduct.price }}, 00</span>
      <v-btn color="sucess" :cartIcon="true"
      @click.native="addProductToCart(currentProduct)">
        Buy Now
      </v-btn>
      <v-btn color="info"
          @click.native="openModal()">
        More Info
      </v-btn>
    </div>
    <modal>{{ currentProduct.details }}</modal>
  </div> -->

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import stars from './Stars';
import modal from './Modal';

export default {
  components: {
    // stars,
    modal,
  },

  computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct',
    }),
  },

  methods: {
    ...mapActions([
      'addProduct',
      'showOrHiddenModal',
    ]),
    addProductToCart(product) {
      this.addProduct(product);
    },
    rated(rate) {
      return `${rate * 20}%`;
    },
    openModal() {
      this.showOrHiddenModal();
    },
  },

};
</script>

<style scoped>
/*
  .product-box {
    width: 800px;
    height: 400px;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .product-image {
    width: 300px;
  }

  .product-info {
    width: 400px;
    align-self: flex-start;
  }

  .product-title {
    font-weight: normal;
  }

  .product-price {
    font-size: 2em;
    font-weight: bolder;
  }

  .product-box button {
    width: 300px;
    margin: .3em 0;
  }*/
</style>

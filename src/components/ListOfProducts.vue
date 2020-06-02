<template>
  <ul class="listOfProducts">

    <v-card v-for="(product, index) in products" :key="index" class="mx-auto my-12"
     max-width="300" outlined>
     <v-img
       v-if="product.image"
       height="auto"
       :src="product.image" lazy-src/>

      <v-card-title>
        <router-link to="/product-details">
        <span @click="addCurrentProduct(product)">
          {{ product.name }}
        </span>
        </router-link>
      </v-card-title>

      <v-card-subtitle>
        <span>{{ 0 }} Available.</span>
      </v-card-subtitle>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0">

        <v-rating
          :value="product.stars"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="product-price">
          <span>R$ {{ product.price }}, 00</span>
          <span>10 x {{ Math.round(product.price / 10) }}, 00 </span>
        </div>
      </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="purple" dark @click.native="addProductToFavorits(product)">
          Favorits
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn color="success" dark
            @click.native="addProductToCart(product)">
          Add to cart
          <v-icon>mdi-cart</v-icon>
        </v-btn>

      </v-card-actions>

    </v-card>

  </ul>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['products'],

  components: {
  },
  methods: {
    ...mapActions([
      'addProduct',
      'currentProduct',
    ]),
    addProductToCart(product) {
      this.addProduct(product);
    },
    addProductToFavorits(product) {
      console.log(product.name, ' Added to favorites.');
      // this.addToFavorits(product);
    },
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  },
};
</script>

<style scoped>

.listOfProducts {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
}

.product-name {
  font-size: 1.2em;
  font-weight: normal;
}

.product-name:hover {
  cursor: pointer;
  text-decoration: underline;
}

.product-price {
  width: 100%;
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  margin-bottom: .5em;
}

</style>

<template>

<div>
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
                  @click.native="dialog = true">
                More Info
              </v-btn>
            </v-col>

          </v-row>

        </v-col>
      </v-row>
    </v-container>

    <v-card-actions>
      {{ currentProduct.details }}
    </v-card-actions>

  </v-card>

  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ currentProduct.name }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            {{ currentProduct.details }}
          </v-row>
        </v-container>

      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark @click.stop="dialog = false">
          Close
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-dialog>
</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
  components: {
  },
  data() {
    return {
      dialog: false
    }
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
    }
  },

};
</script>

<style scoped>

</style>

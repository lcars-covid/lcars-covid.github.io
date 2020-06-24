<template>
  <v-row>
    <v-col
      :cols="12"
      v-for="searchResult in filteredItems"
      :key="searchResult.country"
    >
   
      <div
        v-if="
          searchResult.continent != null &&
            searchResult.continent != searchResult.country
        "
        class="primary-text"
      >
   
        <v-row>
          <v-col>
            <h2 class="text-md">
              <span v-html="searchResult.country"></span>
              &nbsp;
              <span v-if="countryURL != ''" class="text-xs font-weight-regular text--disabled"
                >current stats</span
              >
              &nbsp;
              <a
                class="text-xxs"
                :href="`/${searchResult.country.toLowerCase()}`"
                v-if="countryURL == ''"
                >Historical Data</a
              >
            </h2>
            <h3 class="text-xs font-weight-regular">
              <span>pop:</span>
              &nbsp;
              <span class="font-weight-bold">{{
                Number(searchResult.population).toLocaleString()
              }}</span>
              <time class="d-block text-xxs text--disabled">
                        {{searchResult.time | moment("MMMM D YYYY")}}
              </time>
            </h3>
          </v-col>
          <v-col :cols="4">
            <v-sheet
              color="#e09111"
              :outlined="true"
              :rounded="true"
              class="mx-1"
            >
              <div class="text-center text-xxs text--secondary">
                New Cases
              </div>
              <div class="text-center text-xxs text--primary">
                +{{ Number(searchResult.cases.new).toLocaleString() }}
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <!-- {{ myData }} -->
        <v-row no-gutters>
          <v-col :cols="3" :sm="4" :md="4" :lg="2" offset-lg="2">
            <donutGraph
              :donutTotal="searchResult.cases.total"
              :donutSlice="searchResult.cases.recovered"
              mainColor="#cef263"
              donutLabel="recovered"
            ></donutGraph>
            <v-sheet
              color="#213349"
              :outlined="true"
              :rounded="true"
              class="mx-1"
            >
              <div class="text-center text-xxs text--disabled">
                Recovered
              </div>
              <div class="text-center text-xs text--secondary">
                {{ Number(searchResult.cases.recovered).toLocaleString() }}
              </div>
            </v-sheet>
          </v-col>
          <v-col :cols="3" :sm="4" :lg="2">
            <donutGraph
              :donutTotal="searchResult.cases.total"
              :donutSlice="searchResult.deaths.total"
              mainColor="#e03535"
              donutLabel="deaths"
            ></donutGraph>
            <v-sheet
              color="#213349"
              :outlined="true"
              :rounded="true"
              class="mx-1"
            >
              <div class="text-center text-xxs text--disabled">
                Deaths
              </div>
              <div class="text-center text-xs text--secondary">
                {{ Number(searchResult.deaths.total).toLocaleString() }}
              </div>
            </v-sheet>
          </v-col>
          <v-col
            :cols="3"
            :sm="4"
            :lg="2"
            v-if="searchResult.population != null"
          >
            <donutGraph
              :donutTotal="searchResult.population"
              :donutSlice="searchResult.cases.total"
              :decimalPlaces="3"
              mainColor="#ff9200"
              classes="smaller-number"
              donutLabel="cases / pop"
            ></donutGraph>
            <v-sheet
              color="#213349"
              :outlined="true"
              :rounded="true"
              class="mx-1"
            >
              <div class="text-center text-xxs text--disabled">
                Total Cases
              </div>
              <div class="text-center text-xs text--secondary">
                {{ Number(searchResult.cases.total).toLocaleString() }}
              </div>
            </v-sheet>
          </v-col>
          <v-col
            :cols="3"
            :sm="4"
            :lg="2"
            v-if="searchResult.population != null"
          >
            <donutGraph
              :donutTotal="searchResult.population"
              :donutSlice="searchResult.tests.total"
              :decimalPlaces="3"
              classes="smaller-number"
              donutLabel="test / pop"
            ></donutGraph>
            <v-sheet
              color="#213349"
              :outlined="true"
              :rounded="true"
              class="mx-1"
            >
              <div class="text-center text-xxs text--disabled">
                Tested
              </div>
              <div class="text-center text-xs text--secondary">
                {{ Number(searchResult.tests.total).toLocaleString() }}
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>
<script>
// @ is an alias to /src
import donutGraph from "@/components/donutGraph.vue";
export default {
  name: "Home",
  components: {
    donutGraph,
  },
  data: () => ({
    //
  }),
  props: {
    search: {
      type: String,
      default: "",
    },
    countryURL: {
      type: String,
      default: ""
    }
  },
  computed: {
    filteredItems() {
      return this.$store.getters.worldData.filter((item) => {
        return (
          item.country.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },

  methods: {
  }
};
</script>
<style scoped>
time {
  opacity: .68;
}
</style>

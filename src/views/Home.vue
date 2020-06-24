<template>
  <v-container>
    <v-row>
      <v-col
        :cols="12"
        v-for="searchResult in filteredItems"
        :key="searchResult.country"
      >
        <div
          v-if="searchResult.continent != null && searchResult.continent != searchResult.country"
          class="primary-text"
        >
          <v-row>
            <v-col>
              <h2 class="text-md" v-html="searchResult.country"></h2>
              <h3 class="text-sm font-weight-regular">
                {{ Number(searchResult.population).toLocaleString() }}
                <span>population</span>
              </h3>
            </v-col>
            <v-col :cols="4">
              <v-sheet
                color="#ff9200"
                :outlined="true"
                :rounded="true"
                class="mx-1"
              >
                <div class="text-center text-xxs text--secondary">
                  New Cases
                </div>
                <div class="text-center text-xs text--primary">
                  {{ Number(searchResult.cases.new).toLocaleString() }}
                </div>
              </v-sheet>
            </v-col>
          </v-row>
          <!-- {{ myData }} -->
          <v-row no-gutters>
            <v-col :cols="3" :sm="4" :md="4" :lg="2">
              <donutGraph
                :donutTotal="searchResult.cases.total"
                :donutSlice="searchResult.cases.recovered"
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
                mainColor="#63e6f2"
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
            <v-col :cols="3" :sm="4" :lg="2" v-if="searchResult.population != null">
              <donutGraph
                :donutTotal="searchResult.population"
                :donutSlice="searchResult.cases.total"
                mainColor="#ff9200"
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
            <v-col :cols="3" :sm="4" :lg="2" v-if="searchResult.population != null">
              <donutGraph
                :donutTotal="searchResult.population"
                :donutSlice="searchResult.tests.total"
                mainColor="#cef263"
                donutLabel="test / pop"
                :decimalPlaces="3"
                classes="smaller-number"
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
  </v-container>
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
    search : 'philippines'
  }),
  computed: {
    filteredItems() {
      return this.$store.getters.worldData.filter((item) => {
        return (
          item.country.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
  methods: {},
};
</script>

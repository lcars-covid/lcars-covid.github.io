<template>
  <v-container>
    <v-sheet
      color="transparent"
      min-height="50vh"
      class="d-flex align-center justify-center"
      v-if="totalCases.length == 0"
    >
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-sheet>
    <v-row v-if="totalCases.length > 0">
      <v-col :cols="12">
        <h2 class="chart-heading">
          <span v-html="highlightedCountry"></span> &nbsp;<span
            class="text-sm text--disabled"
            >historical trend</span
          >
        </h2>
      </v-col>
      <v-col :cols="12" v-if="dailyCases.length > 0">
        <v-sheet color="transparent" :outlined="true" class="graph">
          <p class="chart-title top">Daily New Cases</p>
          <v-sparkline
            :value="dailyCases"
            :gradient="['#FF0', '#F0F', '#00c6ff']"
            :smooth="10"
            :padding="8"
            :line-width="2"
            :stroke-linecap="'round'"
            :gradient-direction="'top'"
            :fill="false"
            :type="'trend'"
            :auto-line-width="false"
            auto-draw
            :show-labels="false"
            :label-size="7"
          >
          </v-sparkline>
        </v-sheet>
      </v-col>
      <v-col :cols="6" v-if="totalCases.length > 0">
        <v-sheet color="transparent" :outlined="true" class="graph">
          <p class="chart-title">Cases</p>
          <v-sparkline
            :value="totalCases"
            :gradient="['#FF0', '#F0F', '#00c6ff']"
            :smooth="10"
            :padding="8"
            :line-width="2"
            :stroke-linecap="'round'"
            :gradient-direction="'top'"
            :fill="false"
            :type="'trend'"
            :auto-line-width="false"
            auto-draw
            :show-labels="false"
            :label-size="7"
          >
          </v-sparkline>
        </v-sheet>
      </v-col>
      <v-col :cols="6" v-if="totalRecovered.length > 0">
        <v-sheet color="transparent" :outlined="true" class="graph">
          <p class="chart-title">Recovered</p>
          <v-sparkline
            :value="totalRecovered"
            :gradient="['#FF0', '#F0F', '#00c6ff']"
            :smooth="10"
            :padding="8"
            :line-width="2"
            :stroke-linecap="'round'"
            :gradient-direction="'top'"
            :fill="false"
            :type="'trend'"
            :auto-line-width="false"
            auto-draw
            :show-labels="false"
            :label-size="7"
          ></v-sparkline>
        </v-sheet>
      </v-col>
      <v-col :cols="6" v-if="totalDeaths.length > 0">
        <v-sheet color="transparent" :outlined="true" class="graph">
          <p class="chart-title">Deaths</p>
          <v-sparkline
            :value="totalDeaths"
            :gradient="['#FF0', '#F0F', '#00c6ff']"
            :smooth="10"
            :padding="8"
            :line-width="2"
            :stroke-linecap="'round'"
            :gradient-direction="'top'"
            :fill="false"
            :type="'trend'"
            :auto-line-width="false"
            auto-draw
            :show-labels="false"
            :label-size="7"
          ></v-sparkline>
        </v-sheet>
      </v-col>
      <v-col :cols="6" v-if="totalTested.length > 0">
        <v-sheet color="transparent" :outlined="true" class="graph">
          <p class="chart-title">Tests Done</p>
          <v-sparkline
            :value="totalTested"
            :gradient="['#FF0', '#F0F', '#00c6ff']"
            :smooth="10"
            :padding="8"
            :line-width="2"
            :stroke-linecap="'round'"
            :gradient-direction="'top'"
            :fill="false"
            :type="'trend'"
            :auto-line-width="false"
            auto-draw
            :show-labels="false"
            :label-size="7"
          ></v-sparkline>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: "highlightCountry",
  components: {},
  data: () => ({
    //
    results: [],
    totalCases: [],
    totalDeaths: [],
    totalRecovered: [],
    reportedDate: [],
    totalTested: [],
    highlightedCountry: "",
  }),
  methods: {
    getData(country) {
      fetch("https://covid-193.p.rapidapi.com/history?country=" + country, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key":
            "d9822f5bcbmsh198dadc54bf35b0p159988jsnd34bf1ce4b3c",
        },
      })
        .then((response) => response.json())
        .then((allData) => {
          var targettedData = [];
          var totalCases = [];
          var totalDeaths = [];
          var totalRecovered = [];
          var reportedDate = [];
          var totalTested = [];
          var dailyCases = [];
          for (targettedData in allData.response) {
            if (allData.response[targettedData].cases.total != null) {
              totalCases.push(allData.response[targettedData].cases.total);
            }
            if (allData.response[targettedData].cases.recovered != null) {
              totalRecovered.push(
                allData.response[targettedData].cases.recovered
              );
            }
            if (allData.response[targettedData].deaths.total != null) {
              totalDeaths.push(allData.response[targettedData].deaths.total);
            }
            if (allData.response[targettedData].tests.total != null) {
              totalTested.push(allData.response[targettedData].tests.total);
            }
            if (allData.response[targettedData].cases.new != null) {
              dailyCases.push(
                Number(allData.response[targettedData].cases.new)
              );
            }
            reportedDate.push(allData.response[targettedData].time);
          }
          // Commit all data to the scope
          this.totalCases = totalCases.reverse();
          this.totalDeaths = totalDeaths.reverse();
          this.totalRecovered = totalRecovered.reverse();
          this.reportedDate = reportedDate.reverse();
          this.totalTested = totalTested.reverse();
          this.dailyCases = dailyCases.reverse();
          this.highlightedCountry = allData.response[targettedData].country;
        });
    },
  },
  props: {
    loadWhichCountry: {
      type: String,
      default: "usa",
    },
  },
  computed: {},
  watch: {},
  created() {
    this.$store.watch(
      (state) => state.countryList,
      (value) => {
        if (value) {
          if (this.loadWhichCountry.length > 0) {
            if (value.indexOf(this.loadWhichCountry) != -1) {
              this.getData(this.loadWhichCountry);
            }
          } else {
            this.getData("afghanistan");
          }
        }
      }
    );
  },
  mounted() {},
};
</script>
<style lang="scss">
.chart-heading {
  margin: 0;
  font-weight: normal;
  opacity: 0.5;
  padding: 0 rem(8);
}
.graph {
  position: relative;
  display: block;
  height: auto;
  padding: rem(5);
  &.v-sheet--outlined {
    &.v-sheet {
      border-color: rgba($white, 0.05) !important;
      border-radius: rem(4);
    }
  }
  .chart-title {
    position: absolute;
    text-transform: uppercase;
    opacity: 0.2;
    color: #00c6ff;
    left: rem(10);
    bottom: 0;
    font-size: rem(12);
    &.top {
      bottom: auto;
      top: rem(8);
    }
  }
  svg {
    position: relative;
    z-index: 10;
  }
}
</style>

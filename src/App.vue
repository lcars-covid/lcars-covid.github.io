<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light bright-header">
      <h1 class="navbar-light font-weight-bold" href="#">
        COVID-19
        <span class="light-text">STATS</span>
      </h1>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>-->
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="d-flex align-items-center">
            <b-dropdown
              id="dropdown-1"
              :text="namedCountry.toUpperCase()+' '+' (change)'"
              variant="muted"
              class="btn-muted text-muted text-uppercase mt-lg-3 d-flex align-items-center"
            >
              <div class="pl-3 pr-3">
                <input
                  type="text"
                  v-model="search"
                  placeholder="Filter by Country Name"
                  class="form-control mt-0 mt-md-2 mb-0 mb-md-2"
                />
              </div>

              <b-dropdown-item
                v-for="result in filteredItems"
                :key="result._id"
                v-if="
                  result.country != 'Africa' &&
                    result.country != 'Asia' &&
                    result.country != 'All' &&
                    result.country != 'Europe' &&
                    result.country != 'North-America' &&
                    result.country != 'South-America' &&
                    result.country != 'R&eacute;union'
                "
                v-index="result.country"
                @click="getStats(result.country)"
                >{{ result.country }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <div class="col-md-3 col-6 donut-chart">
          <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
            <circle
              class="donut-ring"
              cx="21"
              cy="21"
              r="15.91549430918954"
              fill="transparent"
              stroke="#000000"
              stroke-width="3"
              opacity=".3"
            />
            <transition name="fill-up" mode="out-in">
              <circle
                class="donut-segment"
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="#ce4b99"
                stroke-width="3"
                :key="focusedCountryStats[0].country"
                :stroke-dasharray="[
                  (focusedCountryStats[0].deaths.total /
                    focusedCountryStats[0].cases.total) *
                    100,
                  100 -
                    (focusedCountryStats[0].deaths.total /
                      focusedCountryStats[0].cases.total) *
                      100,
                ]"
                stroke-dashoffset="25"
                stroke-linecap="round"
              />
            </transition>
            <g class="chart-text">
              <text x="50%" y="50%" class="chart-number">
                {{
                  Number(
                    (focusedCountryStats[0].deaths.total /
                      focusedCountryStats[0].cases.total) *
                      100
                  ).toFixed(1)
                }}%
              </text>
              <text x="50%" y="50%" class="chart-label">Deaths</text>
            </g>
          </svg>
        </div>
        <div class="col-md-3 col-6 donut-chart">
          <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
            <circle
              class="donut-ring"
              cx="21"
              cy="21"
              r="15.91549430918954"
              fill="transparent"
              stroke="#000000"
              stroke-width="3"
              opacity=".3"
            />
            <transition name="fill-up" mode="out-in">
              <circle
                class="donut-segment"
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="green"
                stroke-width="3"
                :key="focusedCountryStats[0].country"
                :stroke-dasharray="[
                  (focusedCountryStats[0].cases.recovered /
                    focusedCountryStats[0].cases.total) *
                    100,
                  100 -
                    (focusedCountryStats[0].cases.recovered /
                      focusedCountryStats[0].cases.total) *
                      100,
                ]"
                stroke-dashoffset="25"
                stroke-linecap="round"
              />
            </transition>

            <g class="chart-text">
              <text x="50%" y="50%" class="chart-number">
                {{
                  Number(
                    (focusedCountryStats[0].cases.recovered /
                      focusedCountryStats[0].cases.total) *
                      100
                  ).toFixed(1)
                }}%
              </text>
              <text x="50%" y="50%" class="chart-label">Recovered</text>
            </g>
          </svg>
        </div>
        <div class="col-md-6">
          <charts
            :graphValues="graphValues"
            :graphValues2="graphValues2"
            :graphValues3="graphValues3"
            :graphLabel="graphLabel"
            deathRecoverRatio="true"
            totalCases="false"
            deathCases="false"
          ></charts>
        </div>
      </div>

      <charts
        :graphValues="graphValues"
        :graphValues2="graphValues2"
        :graphValues3="graphValues3"
        :graphLabel="graphLabel"
        deathRecoverRatio="false"
        totalCases="true"
        deathCases="true"
      ></charts>
      <div v-if="focusedCountryStats.length < 2" class="row mb-3">
        <div class="col-6">
          <span class="badge badge-pill badge-info d-flex align-items-center">
            <span class="icomoon icon-sphere"></span>
            {{ Number(focusedCountryStats[0].cases.total).toLocaleString() }}
          </span>
        </div>
        <div class="col-6 mt-0">
          <span class="badge badge-pill badge-dark d-flex align-items-center">
            <span class="icomoon icon-skull"></span>
            {{ Number(focusedCountryStats[0].deaths.total).toLocaleString() }}
          </span>
        </div>
        <div class="col-6 mt-1">
          <span
            class="badge badge-pill badge-warning d-flex align-items-center"
          >
            <span class="icomoon icon-person_add"></span>
            +
            {{ Number(focusedCountryStats[0].cases.new).toLocaleString() }}
          </span>
        </div>
        <div class="col-6 mt-1">
          <span
            class="badge badge-pill badge-success d-flex align-items-center"
          >
            <span class="icomoon icon-man1"></span>
            {{
              Number(focusedCountryStats[0].cases.recovered).toLocaleString()
            }}
          </span>
        </div>
        <!-- {{focusedCountryStats[0].day}} -->
      </div>

      <div class="row worldwide-stats">
        <h2
          class="col-12 text-default text-uppercase d-flex align-items-center mt-3"
        >
          WORLDWIDE STATS
          <span class="label label-warning ml-3">
            <span class="icomoon icon-person_add"></span>
            <span class="strong-text">
              <animated-number
                :value="Number(worldStats[0].cases.new).toFixed(0)"
                :formatValue="formatToLocal"
                :duration="2000"
              />
            </span>
            <span class="light-text">NEW CASES</span>
          </span>
        </h2>
        <div class="col-lg-3 col-md-6">
          <div class="stat-card blue text-center pt-3 pb-3 pl-3 pr-3">
            <div class="floating-icon icomoon icon-sphere"></div>
            <h2>
              <animated-number
                :value="Number(worldStats[0].cases.total).toFixed(0)"
                :formatValue="formatToLocal"
                :duration="2000"
              />
            </h2>
            <p class="text-uppercase mb-0">Total Cases</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mt-1 mt-md-0">
          <div class="stat-card red text-center pt-3 pb-3 pl-3 pr-3">
            <div class="floating-icon icomoon icon-hospital-o"></div>
            <h2>
              <animated-number
                :value="Number(worldStats[0].cases.active).toFixed(0)"
                :formatValue="formatToLocal"
                :duration="2000"
              />
            </h2>
            <p class="text-uppercase mb-0">Active</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mt-1 mt-lg-0">
          <div class="stat-card green text-center pt-3 pb-3 pl-3 pr-3">
            <div class="floating-icon icomoon icon-man1"></div>
            <h2>
              <animated-number
                :value="Number(worldStats[0].cases.recovered).toFixed(0)"
                :formatValue="formatToLocal"
                :duration="2000"
              />
            </h2>
            <p class="text-uppercase mb-0">Recovered</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 mt-1 mt-lg-0">
          <div class="stat-card black text-center pt-3 pb-3 pl-3 pr-3">
            <div class="floating-icon icomoon icon-skull"></div>
            <h2>
              <animated-number
                :value="Number(worldStats[0].deaths.total).toFixed(0)"
                :formatValue="formatToLocal"
                :duration="2000"
              />
            </h2>
            <p class="text-uppercase mb-0">Deaths</p>
          </div>
        </div>
      </div>
      <div class="row regional-stats">
        <div class="col-lg-6 col-md-6">
          <h4 class="text-default text-uppercase mt-3">Regional STATS</h4>
          <div class="row">
            <regionStats
              :regionStatsData="asiaStats[0]"
              regionName="Asia"
            ></regionStats>
            <regionStats
              :regionStatsData="euroStats[0]"
              regionName="Europe"
            ></regionStats>
            <regionStats
              :regionStatsData="northAmericaStats[0]"
              regionName="North America"
            ></regionStats>
            <regionStats
              :regionStatsData="southAmericaStats[0]"
              regionName="South America"
            ></regionStats>
            <regionStats
              customClass="offset-lg-6"
              :regionStatsData="africaStats[0]"
              regionName="Africa"
            ></regionStats>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <countryStats :noContinents="noContinents"></countryStats>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
import charts from "./components/charts.vue";
import regionStats from "./components/regionStats.vue";
import countryStats from "./components/countryStats.vue";

export default {
  data() {
    return {
      search: "",
      results: [],
      graphValues: [],
      graphValues2: [],
      graphValues3: [],
      graphLabel: [],
      getCountryStats: "",
      namedCountry: "",
      focusedCountryName: "",
    };
  },
  components: {
    charts,
    regionStats,
    countryStats,
    AnimatedNumber,
  },
  mounted() {
    this.getData();
    this.getStats("");
  },
  computed: {
    filteredItems() {
      return this.results.filter((item) => {
        return (
          item.country.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
    noContinents() {
      return this.results.filter((item) => {
        return (
          item.country !== "North-America" &&
          item.country !== "Asia" &&
          item.country !== "South-America" &&
          item.country !== "Europe" &&
          item.country !== "Africa"
        );
      });
    },
    asiaStats() {
      return this.results.filter((item) => {
        return item.country.toLowerCase().indexOf("asia") > -1;
      });
    },
    northAmericaStats() {
      return this.results.filter((item) => {
        return item.country.toLowerCase().indexOf("north-america") > -1;
      });
    },
    southAmericaStats() {
      return this.results.filter((item) => {
        return item.country.toLowerCase().indexOf("south-america") > -1;
      });
    },
    africaStats() {
      return this.results.filter((item) => {
        return item.country.toLowerCase().indexOf("africa") > -1;
      });
    },
    euroStats() {
      return this.results.filter((item) => {
        return item.country.toLowerCase().indexOf("europe") > -1;
      });
    },
    worldStats() {
      return this.results.filter((item) => {
        return item.country.toLowerCase().indexOf("all") > -1;
      });
    },
    focusedCountryStats() {
      return this.results.filter((item) => {
        return (
          item.country
            .toLowerCase()
            .indexOf(this.focusedCountryName.toLowerCase()) > -1
        );
      });
    },
  },
  methods: {
    formatToLocal(value) {
      return `${value.toLocaleString()}`;
    },
    getData() {
      var sorted = {};
      fetch("https://covid-193.p.rapidapi.com/statistics", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key":
            "d9822f5bcbmsh198dadc54bf35b0p159988jsnd34bf1ce4b3c",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          data.response.sort((a, b) => (a.country > b.country ? 1 : -1));
          this.results = data.response;
        });
    },
    getStats(country) {
      var fetchURL = "";
      if (country.length == 0) {
        fetchURL = "https://coronavirus-map.p.rapidapi.com/v1/spots/summary";
        this.namedCountry = "Afghanistan";
      } else {
        this.focusedCountryName = country;
        fetchURL =
          "https://coronavirus-map.p.rapidapi.com/v1/spots/month?region=" +
          country;
        this.namedCountry = country;
      }
      fetch(fetchURL, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
          "x-rapidapi-key":
            "d9822f5bcbmsh198dadc54bf35b0p159988jsnd34bf1ce4b3c",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          var graphLabel = [];
          var graphValues = [];
          var graphValues2 = [];
          var graphValues3 = [];
          var graphValues4 = [];
          var valueToPush = [];
          var valueToPush2 = [];
          var valueToPush3 = [];
          var valueToPush4 = [];
          var label = [];
          this.graphValues = [];
          this.graphValues2 = [];
          this.graphValues3 = [];
          for (label in data.data) {
            graphLabel.push(label);
            graphValues.push(data.data[label].death_ratio);
            graphValues2.push(data.data[label].recovery_ratio);
            graphValues3.push(data.data[label].total_cases);
            graphValues4.push(data.data[label].deaths);
          }
          this.graphLabel = graphLabel.reverse();
          valueToPush = graphValues.reverse();
          valueToPush2 = graphValues2.reverse();
          valueToPush3 = graphValues3.reverse();
          valueToPush4 = graphValues4.reverse();
          this.graphValues.push(valueToPush);
          this.graphValues.push(valueToPush2);
          this.graphValues2.push(valueToPush3);
          this.graphValues3.push(valueToPush4);
        });
    },
  },
};
</script>

<style lang="scss">
@import "sass/mixins.scss";
a.btn.btn-primary.color-white {
  color: white;
}

.card-header {
  color: white;
}
.text-muted {
  .btn-muted {
    color: #6c757d;
    font-size: rem(20) !important;
    font-weight: 500;
  }
}

.b-dropdown {
  &.d-block {
    .dropdown-toggle {
      display: block;
      min-width: 100%;
    }
  }
}

.floating-icon {
  position: absolute;
  left: rem(16);
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: rem(64);
}
.regional-stats {
  .icomoon {
    opacity: 0.15;
    top: auto;
    bottom: rem(-20);
  }
}
.worldwide-stats {
  .icomoon {
    opacity: 0.15;
    top: auto;
    bottom: rem(-20);
  }
}

.chart-text {
  font: 16px/1.4em "Montserrat", Arial, sans-serif;
  fill: #000;
  transform: translateY(0.25em);
}

.chart-number {
  font-size: 0.55em;
  line-height: 1;
  text-anchor: middle;
  transform: translateY(-0.25em);
  fill: #ffffff;
}

.chart-label {
  font-size: 0.18em;
  text-transform: uppercase;
  text-anchor: middle;
  transform: translateY(0.7em);
  fill: #ffffff;
  opacity: 0.3;
}

.label {
  font-size: 0.5em;
  border-radius: 0.2em;
  padding: 0.2em rem(8);
  &.label-warning {
    background-color: #ff9200;
    color: #ffffff;
  }
}
.strong-text {
  font-weight: bold;
}
.light-text {
  font-weight: lighter;
}
.change-text {
  color: rgba(#5d78e9, 0.8);
  text-transform: uppercase;
  font-size: rem(12);
}
%no-outline {
    outline-color: transparent;
    box-shadow: none !important;
}
.dropdown-toggle {
      @extend %no-outline;
  &:focus {
      @extend %no-outline;
  }
}
</style>

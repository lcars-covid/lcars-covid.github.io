<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light bright-header">
      <h1 class="navbar-light font-weight-bold" href="#">
        COVID-19
        <span class="font-weight-light">STATS</span>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    <div class="container">
      <h2 class="text-default text-uppercase mt-3">WORLDWIDE STATS</h2>

      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="stat-card blue text-center pt-3 pb-3 pl-3 pr-3">
            <div class="floating-icon icomoon icon-sphere"></div>
            <h2>{{ worldStats[0].cases.total.toLocaleString() }}</h2>
            <p class="text-uppercase mb-0">Total Cases</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="stat-card yellow text-center pt-3 pb-3 pl-3 pr-3">
            <div class="floating-icon icomoon icon-person_add"></div>
            <h2>
              {{ "+" + Number(worldStats[0].cases.new).toLocaleString() }}
            </h2>
            <p class="text-uppercase mb-0">New Cases</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="stat-card red text-center pt-3 pb-3 pl-3 pr-3">
            <div class="floating-icon icomoon icon-hospital-o"></div>
            <h2>{{ Number(worldStats[0].cases.active).toLocaleString() }}</h2>
            <p class="text-uppercase mb-0">Active</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="stat-card green text-center pt-3 pb-3 pl-3 pr-3">
            <div class="floating-icon icomoon icon-man1"></div>
            <h2>
              {{ Number(worldStats[0].cases.recovered).toLocaleString() }}
            </h2>
            <p class="text-uppercase mb-0">Recovered</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <h4 class="text-default text-uppercase mt-3">Regional STATS</h4>
          <div class="row">
            <div class="col-lg-6">
              <h5 class="text-muted text-uppercase">Asia</h5>
              <div
                class="stat-card asian blue text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3"
              >
                <div class="floating-icon icomoon icon-sphere"></div>
                <div class="row align-items-center">
                  <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
                    {{ Number(asiaStats[0].cases.recovered).toLocaleString() }}
                  </h2>
                  <p class="h8 col-sm text-uppercase mb-0 text-lg-right">
                    Total Cases
                  </p>
                </div>
              </div>
              <div
                class="stat-card asian yellow text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3"
              >
                <div class="floating-icon icomoon icon-person_add"></div>
                <div class="row align-items-center">
                  <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
                    {{ "+" + Number(asiaStats[0].cases.new).toLocaleString() }}
                  </h2>
                  <p class="h8 col-sm text-uppercase mb-0 text-lg-right">
                    New Cases
                  </p>
                </div>
              </div>
              <div
                class="stat-card asian red text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3"
              >
                <div class="floating-icon icomoon icon-hospital-o"></div>
                <div class="row align-items-center">
                  <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
                    {{ Number(asiaStats[0].cases.active).toLocaleString() }}
                  </h2>
                  <p class="h8 col-sm text-uppercase mb-0 text-lg-right">
                    Active Cases
                  </p>
                </div>
              </div>
              <div
                class="stat-card asian green text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3"
              >
                <div class="floating-icon icomoon icon-man1"></div>
                <div class="row align-items-center">
                  <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
                    {{ Number(asiaStats[0].cases.recovered).toLocaleString() }}
                  </h2>
                  <p class="h8 col-sm text-uppercase mb-0 text-lg-right">
                    Recovered
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <h5 class="text-muted text-uppercase mt-md-3">Europe</h5>
              <div
                class="stat-card euro blue text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3"
              >
                <div class="floating-icon icomoon icon-sphere"></div>
                <div class="row align-items-center">
                  <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
                    {{ Number(euroStats[0].cases.recovered).toLocaleString() }}
                  </h2>
                  <p class="h8 col-sm text-uppercase mb-0 text-lg-right">
                    Total Cases
                  </p>
                </div>
              </div>
              <div
                class="stat-card euro yellow text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3"
              >
                <div class="floating-icon icomoon icon-person_add"></div>
                <div class="row align-items-center">
                  <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
                    {{ "+" + Number(euroStats[0].cases.new).toLocaleString() }}
                  </h2>
                  <p class="h8 col-sm text-uppercase mb-0 text-lg-right">
                    New Cases
                  </p>
                </div>
              </div>
              <div
                class="stat-card euro red text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3"
              >
                <div class="floating-icon icomoon icon-hospital-o"></div>
                <div class="row align-items-center">
                  <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
                    {{ Number(euroStats[0].cases.active).toLocaleString() }}
                  </h2>
                  <p class="h8 col-sm text-uppercase mb-0 text-lg-right">
                    Active Cases
                  </p>
                </div>
              </div>
              <div
                class="stat-card euro green text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3"
              >
                <div class="floating-icon icomoon icon-man1"></div>
                <div class="row align-items-center">
                  <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
                    {{ Number(euroStats[0].cases.recovered).toLocaleString() }}
                  </h2>
                  <p class="h8 col-sm text-uppercase mb-0 text-lg-right">
                    Recovered
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <h5 class="text-muted text-uppercase mt-md-3">Africa</h5>
              <div
                class="stat-card afro blue text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3"
              >
                <div class="floating-icon icomoon icon-sphere"></div>
                <div class="row align-items-center">
                  <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
                    {{
                      Number(africaStats[0].cases.recovered).toLocaleString()
                    }}
                  </h2>
                  <p class="h8 col-sm text-uppercase mb-0 text-lg-right">
                    Total Cases
                  </p>
                </div>
              </div>
              <div
                class="stat-card afro yellow text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3"
              >
                <div class="floating-icon icomoon icon-person_add"></div>
                <div class="row align-items-center">
                  <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
                    {{
                      "+" + Number(africaStats[0].cases.new).toLocaleString()
                    }}
                  </h2>
                  <p class="h8 col-sm text-uppercase mb-0 text-lg-right">
                    New Cases
                  </p>
                </div>
              </div>
              <div
                class="stat-card afro red text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3"
              >
                <div class="floating-icon icomoon icon-hospital-o"></div>
                <div class="row align-items-center">
                  <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
                    {{ Number(africaStats[0].cases.active).toLocaleString() }}
                  </h2>
                  <p class="h8 col-sm text-uppercase mb-0 text-lg-right">
                    Active Cases
                  </p>
                </div>
              </div>
              <div
                class="stat-card afro green text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3"
              >
                <div class="floating-icon icomoon icon-man1"></div>
                <div class="row align-items-center">
                  <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
                    {{
                      Number(africaStats[0].cases.recovered).toLocaleString()
                    }}
                  </h2>
                  <p class="h8 col-sm text-uppercase mb-0 text-lg-right">
                    Recovered
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 order-lg-1 mt-3 mt-lg-0">
              <div class="custom-info left">
                              <paginate
                name="countries"
                :list="filteredItems"
                :per="3"
                class="pl-0"
              >
                <div
                  v-for="filteredItems in paginated('countries')"
                  class="card mb-2"
                >
                  <div class="card-header bg-info text-uppercase">
                    {{ filteredItems.country }}
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <span
                          class="badge badge-pill badge-info d-flex align-items-center"
                          ><span class="icomoon icon-sphere"></span>
                          {{
                            Number(filteredItems.cases.total).toLocaleString()
                          }}</span
                        >
                      </div>
                      <div class="col-12 col-lg-6">
                        <span
                          class="badge badge-pill badge-dark d-flex align-items-center"
                          ><span class="icomoon icon-skull"></span>
                          {{
                            Number(filteredItems.deaths.total).toLocaleString()
                          }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </paginate>
              <paginate-links
                for="countries"
                :simple="{
                  prev: 'Back',
                  next: 'Next',
                }"
                :classes="{
                  ul: ['row', 'list-unstyled'],
                  '.next': ['col-6', 'text-right'],
                  '.prev': ['col-6', 'text-left'],
                  '.next > a': [
                    'btn',
                    'btn-primary',
                    'color-white',
                    'text-uppercase',
                  ],
                  '.prev > a': [
                    'btn',
                    'btn-primary',
                    'color-white',
                    'text-uppercase',
                  ],
                }"
              ></paginate-links>
              </div>

            </div>
            
          </div>
        </div>
        <div class="col-lg-6 col-md-6 pt-lg-4">
          <div class="custom-info right">
           <b-dropdown
            id="dropdown-1"
            :text="namedCountry.toUpperCase()"
            variant="muted"
            class="btn-muted text-muted text-uppercase mt-lg-3 d-block"
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
                  result.country != 'All' &&
                  result.country != 'Asia' &&
                  result.country != 'Europe' &&
                  result.country != 'R&eacute;union'
              "
              v-index="result.country"
              @click="getStats(result.country)"
              >{{ result.country }}</b-dropdown-item
            >
          </b-dropdown>
          <div class="chart-box mb-3">
            <graph-area
              :renderInterval="1000"
              :colors="['#90A7ED', '#67CBFF']"
              :theme="'classic'"
              :height="200"
              :axis-full-mode="true"
              :shape="'normal'"
              :opacity="0.7"
              :borderLine="false"
              :textRotateX="70"
              :axisXStyle="'none'"
              :axisYStyle="'none'"
              :axisStep="100"
              :axisXPosition="'bottom'"
              :paddingTop="30"
              :paddingBottom="70"
              :paddingLeft="60"
              :paddingRight="20"
              :labels="graphLabel"
              :values="graphValues"
            >
              <legends :names="['MORTALITY RATIO', 'RECOVERY RATIO']"></legends>
              <guideline :tooltip-y="true"></guideline>
            </graph-area>
          </div>
          <div class="chart-box mb-3">
            <graph-area
              :renderInterval="1000"
              :colors="['orange']"
              :theme="'classic'"
              :height="200"
              :axis-full-mode="true"
              :shape="'normal'"
              :opacity="0.7"
              :borderLine="false"
              :textRotateX="70"
              :axisXStyle="'none'"
              :axisYStyle="'none'"
              :axisXPosition="'bottom'"
              :paddingTop="30"
              :paddingBottom="70"
              :paddingLeft="60"
              :paddingRight="20"
              :labels="graphLabel"
              :values="graphValues2"
            >
              <legends :names="['TOTAL CASES']"></legends>

              <guideline :tooltip-y="true"></guideline>
            </graph-area>
          </div>
          <div class="chart-box mb-3">
            <graph-area
              :renderInterval="1000"
              :colors="['black', 'orange']"
              :theme="'classic'"
              :height="200"
              :axis-full-mode="true"
              :shape="'normal'"
              :opacity="0.7"
              :borderLine="false"
              :textRotateX="70"
              :axisXStyle="'none'"
              :axisYStyle="'none'"
              :axisXPosition="'bottom'"
              :paddingTop="30"
              :paddingBottom="70"
              :paddingLeft="60"
              :paddingRight="20"
              :labels="graphLabel"
              :values="graphValues3"
            >
              <legends :names="['TOTAL DEATH']"></legends>

              <guideline :tooltip-y="true"></guideline>
            </graph-area>
          </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
      paginate: ["countries"],
    };
  },
  components: {
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
    asiaStats() {
      return this.results.filter((item) => {
        return item.country.toLowerCase().indexOf("asia") > -1;
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
  },
  methods: {
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
        this.namedCountry = "World";
      } else {
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
          //this.worldStats = data.data;
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

            // console.log('cases'+data.data[label].total_cases);
            // console.log('deaths'+data.data[label].deaths);
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
          // console.log(this.graphValues2);
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
      display:block;
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
  font-size: rem(32);
}


</style>

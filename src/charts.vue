<template>
  <div>
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
        :values="graphValues2"
      >
        <legends :names="['TOTAL DEATH']"></legends>
        <guideline :tooltip-y="true"></guideline>
      </graph-area>
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
        :values="totalDeaths"
      >
        <legends :names="['TOTAL DEATH']"></legends>
        <guideline :tooltip-y="true"></guideline>
      </graph-area>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      totalDeaths: [],
    };
  },
  mounted() {
    this.getStats("");
  },
  computed: {},
  methods: {
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

          for (label in data.data) {
            graphLabel.push(label);
            graphValues.push(data.data[label].death_ratio);
            graphValues2.push(data.data[label].recovery_ratio);
            rawCases.push(data.data[label].total_cases);
            rawDeath.push(data.data[label].deaths);
            // console.log('cases'+data.data[label].total_cases);
            // console.log('deaths'+data.data[label].deaths);
          }
          this.graphLabel = graphLabel.reverse();
          valueToPush = graphValues.reverse();
          valueToPush2 = graphValues2.reverse();
          valueToPush3 = rawCases.reverse();
          deathData = rawDeath.reverse();
          this.graphValues.push(valueToPush);
          this.graphValues.push(valueToPush2);
          this.graphValues2.push(valueToPush3);
          this.totalDeaths.push(deathData);
          // console.log(this.graphValues2);
        });
    },
  },
};
</script>

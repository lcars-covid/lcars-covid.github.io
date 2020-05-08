<template>
  <div class="col-lg-6" :class="customClass">
            <h5 class="col-12 text-default text-uppercase d-flex align-items-center justify-content-between mt-3">
          {{ regionName }}
          <span class="label label-warning ml-3">
            <span class="icomoon icon-person_add"></span>
            <span class="strong-text">
              <animated-number
                :value="Number(regionStatsData.cases.new).toFixed(0)"
                :formatValue="formatToLocal"
                :duration="1000"
              />
            </span>
            <span class="light-text">NEW CASES</span>
          </span>
        </h5>
    <div class="stat-card asian blue text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3">
      <div class="floating-icon icomoon icon-people_alt"></div>
      <div class="row align-items-center">
        <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
          <animated-number
            :value="Number(regionStatsData.cases.total)"
            :formatValue="formatToLocal"
            :duration="1000"
          />
          <p class="h8 text-uppercase mb-0 text-lg-right">Total Cases</p>
        </h2>
        
      </div>
    </div>
    <div
      class="stat-card asian red text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3 mt-1 mt-lg-0"
    >
      <div class="floating-icon icomoon icon-hospital-o"></div>
      <div class="row align-items-center">
        <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
          <animated-number
            :value="Number(regionStatsData.cases.active)"
            :formatValue="formatToLocal"
            :duration="1000"
          />
          <p class="h8 text-uppercase mb-0 text-lg-right">Active Cases</p>
        </h2>
        
      </div>
    </div>
    <div
      class="stat-card asian green text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3 mt-1 mt-lg-0"
    >
      <div class="floating-icon icomoon icon-man1"></div>
      <div class="row align-items-center">
        <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
          <animated-number
            :value="Number(regionStatsData.cases.recovered)"
            :formatValue="formatToLocal"
            :duration="1000"
          />
          <p class="h8 text-uppercase mb-0 text-lg-right">Recovered</p>
        </h2>
        
      </div>
    </div>
    <div
      class="stat-card asian black text-center pt-3 pb-3 pl-3 pr-3 mb-lg-3 mt-1 mt-lg-0"
    >
      <div class="floating-icon icomoon icon-skull"></div>
      <div class="row align-items-center">
        <h2 class="col-sm h4 pl-lg-4 text-lg-right text-center">
          <animated-number
            :value="Number(regionStatsData.deaths.total)"
            :formatValue="formatToLocal"
            :duration="1000"
          />
          <p class="h8 text-uppercase mb-0 text-lg-right">Deaths</p>
        </h2>
        
      </div>
    </div>
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";
export default {
  data() {
    return {};
  },
  components: {
    AnimatedNumber,
  },
  methods: {
    formatToLocal(value) {
      return `${value.toLocaleString()}`;
    },
  },
  props: ["regionStatsData", "regionName","customClass"],
};
</script>

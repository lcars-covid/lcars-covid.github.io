<template>
  <div>
    <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
      <circle
        class="donut-ring"
        :class="classes"
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        :stroke="trackColor"
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
          :stroke="mainColor"
          stroke-width="3"
          :key="donutName"
          :stroke-dasharray="[
            (donutSlice / donutTotal) * 100,
            100 - (donutSlice / donutTotal) * 100,
          ]"
          stroke-dashoffset="25"
          stroke-linecap="round"
        />
      </transition>
      <g class="chart-text">
        <text x="50%" y="50%" class="chart-number" :class="classes">
          {{
            Number((donutSlice / donutTotal) * 100).toFixed(
              Number(decimalPlaces)
            )
          }}%
        </text>
        <text x="50%" y="50%" class="chart-label">{{ donutLabel }}</text>
      </g>
    </svg>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "donutGraph",
  components: {},
  props: {
    donutTotal: {
      type: Number,
      default: 0,
    },
    donutSlice: {
      type: Number,
      default: 0,
    },
    donutName: {
      type: String,
      default: "",
    },
    donutLabel: {
      type: String,
      default: "",
    },
    classes: {
      type: String,
      default: "",
    },
    mainColor: {
      type: String,
      default: "#be4b99",
    },
    trackColor: {
      type: String,
      default: "#000000",
    },
    decimalPlaces: {
      type: Number,
      default: 1,
    },
    fontSize: {
      type: String,
      default: "0.55em",
    },
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
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
  fill: #fff;
  &.smaller-number {
    font-size: 0.45em;
  }
}
.chart-label {
  font-size: 0.18em;
  text-transform: uppercase;
  text-anchor: middle;
  transform: translateY(0.7em);
  fill: #fff;
  opacity: 0.3;
}
</style>

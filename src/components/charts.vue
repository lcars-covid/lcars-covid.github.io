<template>
  <div>

    <div class="chart-box mb-3" v-if="deathRecoverRatio == 'true'">
      <graph-area
        :renderInterval="1000"
        :colors="['#354459', '#85d7c1']"
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
    <div class="row">
      <div class="chart-box mb-3 col-sm-6" v-if="totalCases == 'true'">
        <graph-area
          :renderInterval="1000"
          :colors="['#308192']"
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
      <div class="chart-box mb-3  col-sm-6" v-if="deathCases == 'true'">
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
          <legends :names="['TOTAL DEATHS']"></legends>

          <guideline :tooltip-y="true"></guideline>
        </graph-area>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: [
    "graphLabel",
    "graphValues",
    "graphValues2",
    "graphValues3",
    "deathRecoverRatio",
    "totalCases",
    "deathCases",
  ],
};
</script>

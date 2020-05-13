<template>
  <div class="pt-3">
    <paginate name="countries" :list="noContinents" :per="12" class="pl-0">
      <div
        v-for="noContinents in paginated('countries')"
        class="card mb-2"
        :key="noContinents.country"
      >
        <div class="card-header text-uppercase pl-0 pr-0 d-flex justify-content-between">
          {{ noContinents.country }}
 <span class="label label-warning ml-3 flex-shrink-0 d-flex align-items-center">
            <span class="icomoon icon-person_add"></span>
            +{{ Number(noContinents.cases.new).toLocaleString() }}
          </span>
        </div>
        <div class="card-body pl-0 pr-0">
          <div class="row">
            <div class="col-12 col-lg-6">
              <span class="badge badge-pill badge-info d-flex align-items-center">
                <span class="icomoon icon-sphere"></span>
                {{ Number(noContinents.cases.total).toLocaleString() }}
              </span>
            </div>
            <div class="col-12 col-lg-6 mt-1 mt-md-1 mt-lg-0">
              <span class="badge badge-pill badge-danger d-flex align-items-center">
                <span class="icomoon icon-hospital-o"></span>
                {{ Number(noContinents.cases.active).toLocaleString() }}
              </span>
            </div>
            <div class="col-12 col-lg-6 mt-1">
              <span class="badge badge-pill badge-dark d-flex align-items-center">
                <span class="icomoon icon-skull"></span>
                {{ Number(noContinents.deaths.total).toLocaleString() }}
              </span>
            </div>
            <div class="col-12 col-lg-6 mt-1">
              <span class="badge badge-pill badge-success d-flex align-items-center">
                <span class="icomoon icon-man1"></span>
                {{ Number(noContinents.cases.recovered).toLocaleString() }}
              </span>
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
        '.next > a': ['btn', 'btn-primary', 'color-white', 'text-uppercase'],
        '.prev > a': ['btn', 'btn-primary', 'color-white', 'text-uppercase'],
      }"
    ></paginate-links>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paginate: ["countries"]
    };
  },
  props: ["noContinents"]
};
</script>

<style lang="scss" scoped>
.card {
  background-color: transparent;
  border: none;
  .card-header {
    background-color: transparent;
  }
}
.label {
  &.label-warning {
    height:1rem;
  }
}
.icon-person_add {
  color:rgba(white,.8);
  font-size:1.2em;
  margin-right:.25rem;
  opacity:1;
}
</style>

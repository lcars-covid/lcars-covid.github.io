<template>
  <div class="pt-3">
    <div class="country-table">
      <paginate name="countries" :list="noContinents" :per="12" tag="ul" class="pl-0">
        <li v-for="noContinents in paginated('countries')" :key="noContinents.country">
          <div class="country-name text-uppercase">
            <h3 class="row justify-content-between">
              <span class="col-6">{{ noContinents.country }}</span>
              <span class="col-6">
                <span class="badge badge-pill badge-new align-items-center">
                <span class="icomoon icon-person_add"></span>
                  <span>+{{ Number(noContinents.cases.new).toLocaleString() }}</span>
                </span>
              </span>
            </h3>
          </div>
          <div class="country-stats row">
            <stats class="col-lg-3 col-6">
              <span class="badge badge-pill badge-active align-items-center">
                <span class="icomoon icon-hospital-o"></span>
              </span>
              {{ Number(noContinents.cases.active).toLocaleString() }}
            </stats>
            <stats class="col-lg-3 col-6">
              <span class="badge badge-pill badge-recovered align-items-center">
                <span class="icomoon icomoon icon-man1"></span>
              </span>
              {{ Number(noContinents.cases.recovered).toLocaleString() }}
            </stats>
            <stats class="col-lg-3 col-6">
              <span class="badge badge-pill badge-dead align-items-center">
                <span class="icomoon icomoon icon-skull"></span>
              </span>
              {{ Number(noContinents.deaths.total).toLocaleString() }}
            </stats>
            <stats class="col-lg-3 col-6">
              <span class="badge badge-pill badge-total align-items-center">
                <span class="icomoon icon-people_alt"></span>
              </span>
              {{ Number(noContinents.cases.total).toLocaleString() }}
            </stats>
          </div>
        </li>
      </paginate>
    </div>
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
    height: 1rem;
  }
}
.icon-person_add {
  color: rgba(white, 0.8);
  font-size: 1.2em;
  margin-right: 0.25rem;
  opacity: 1;
}

.country-table {
  border-radius: 0.5rem;
  background: #328190;
  padding: 0.5rem;
  color: #fff;
  margin-bottom:#{(16/16) * 1rem};
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    .country-name {
      h3 {
        margin: 0;
        font-size: 1rem;
      }
    }
    .country-stats {
      font-size: #{(14/16) * 1rem};
      margin-bottom: #{(8/16) * 1rem};
      stats {
        color: #f1d8b7;
      }
    }
  }
}
[class^="badge"],
[badge*=" badge"] {
  color: rgba(black, 0.4);
}
.badge-active {
  background-color: #f8b4bc;
}
.badge-recovered {
  background-color: #73c2bf;
}
.badge-dead {
  background-color: #525151;
}
.badge-total {
  background-color: #769ae9;
}
.badge-new {
  background-color: #ff9200;
  font-size: #{(10/16) * 1rem};
  border-radius:#{(4/16) * 1rem};
  display: inline-flex;
  align-items: center;
  min-width:#{(76/16) * 1rem};
  .icomoon {
    color: inherit;
    padding-right:#{(4/16) * 1rem};
  }
}
</style>

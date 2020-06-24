<template>
  <v-app>
    <div>
      <v-app-bar>
        <a
          href="/"
          v-if="pageIdentify()[pageIdentify().length - 1] != ''"
          class="text-decoration-none ml-n4"
        >
          <v-btn class="mx-2" fab dark small depressed color="primary">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn></a
        >
        <div>
          COVID-19 STATS
        </div>
        <!-- <router-link to="/" class="mr-2">Home</router-link> -->
      </v-app-bar>
    </div>

    <countryHistory
      :loadWhichCountry="pageIdentify()[pageIdentify().length - 1]"
      v-if="pageIdentify()[pageIdentify().length - 1] != ''"
    ></countryHistory>
    <v-container>
      <v-form ref="form" v-if="pageIdentify()[pageIdentify().length - 1] == ''">
        <v-text-field
          v-model="search"
          label="Filter Country Name"
          filled
          class="flex-shrink-0"
        ></v-text-field>
      </v-form>

      <countryQuickStats
        countryURL=""
        :search="search"
        v-if="pageIdentify()[pageIdentify().length - 1] == ''"
      ></countryQuickStats>
      <v-row v-if="!areCountriesLoaded">
        <v-col class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular
        ></v-col>
      </v-row>
      <countryQuickStats
        :countryURL="pageIdentify()[pageIdentify().length - 1]"
        :search="pageIdentify()[pageIdentify().length - 1]"
        v-if="pageIdentify()[pageIdentify().length - 1] != ''"
      ></countryQuickStats>
    </v-container>
    <v-footer padless>
      <v-card class="flex" flat tile>
        <v-card-title >
          <div class="footer-msg font-italic text-xs">
            "Help prevent the spread of COVID-19. Clean your hands often, maintain social distancing and stay home if you feel unwell."
          </div>
        </v-card-title>
        <v-card-text >
         <div class="py-2 site-author text-center text-xxs">{{ new Date().getFullYear() }} — <strong>Artvader</strong></div> 
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import countryHistory from "@/components/countryHistory.vue";
import countryQuickStats from "@/components/countryQuickStats.vue";
export default {
  name: "App",
  components: {
    countryHistory,
    countryQuickStats,
  },
  title() {
    return `COV19Spy | ${this.pageIdentify()[
      this.pageIdentify().length - 1
    ].toUpperCase()}`;
  },
  data: () => ({
    //
    pageLocation: "",
    to: {},
    from: {},
    search: "",
    areCountriesLoaded: false,
  }),
  methods: {
    pageIdentify() {
      return window.location.href.split("/");
    },
  },
  watch: {
    $route: function(to, from) {
      this.to = to;
      this.from = from;
    },
  },
  computed: {
    filteredItems() {
      return this.$store.getters.worldData.filter((item) => {
        return (
          item.country.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
  created() {
    this.pageIdentify();
    this.$store.watch(
      (state) => state.countryList,
      (value) => {
        if (value) {
          this.areCountriesLoaded = true;
        }
      }
    );
  },
  mounted() {
    this.pageIdentify();
  },
};
</script>

<style lang="scss">
@import "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css";
@import "./styles/02_molecules/text-size-helper";
@include dark-theme() {
  background: radial-gradient(circle at top left, #19283b 75%, #3a495c 95%);
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  .v-app-bar {
    height: rem(64) !important;
    .v-toolbar__content {
      height: rem(64) !important;
    }
  }
  .primary-text {
    color: rgba($white, 0.5);
  }
  .v-skeleton-loader__avatar {
    width: 3.5rem;
  }
  header {
    background-image: linear-gradient(to right, #dd185a 10%, #fe6702 90%);
  }
}

.v-application .rounded {
  border-radius: rem(4) !important;
}

.footer-msg {
  line-height: 1.2em;
  opacity: .3;
}

.site-author {
    opacity: .3;
}
</style>

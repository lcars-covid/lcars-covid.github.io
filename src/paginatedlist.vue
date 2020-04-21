<template>
  <div>
    <ul>
      <li>
      </li>
    </ul>
    <button :disabled="pageNumber === 0" @click="prevPage">
      Previous
    </button>
    <button :disabled="pageNumber >= pageCount - 1" @click="nextPage">
      Next
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageNumber: 0,
    };
  },
  props: {
    listData: {
      type: Array,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
  },
  computed: {
    pageCount() {
      let l = this.listData.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.listData.slice(start, end);
    },
  },
};
</script>

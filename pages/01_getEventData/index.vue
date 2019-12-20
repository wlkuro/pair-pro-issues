<template>
  <section>
    <div>
      <ul>
        <li v-for="(element, index) in results">{{element.title}}{{element.owner_display_name}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
// use api https://connpass.com/about/api/
// todo
// display data
// started_at | title(event_url) | address + place| accepted
// sort started_at
// add Dependency to axios
// cf https://ja.nuxtjs.org/examples/async-data/
// cf https://qiita.com/mgr/items/f2193fd21765be1d34c2

import axios from "axios";

export default {
  data() {
    return {
      results: []
    };
  },
  async asyncData({ app }) {
    const baseUrl = "https://connpass.com/api/v1/event/";
    const param = "?order=2";
    const getUrl = encodeURI(baseUrl + param);
    const response = await axios.get(getUrl);
    // don't get confirm data
    //    console.log(this.results);
    console.log("aaaa");
    console.log(response.data.events);
    return {
      results: response.data.events
    };
  }
};
</script>
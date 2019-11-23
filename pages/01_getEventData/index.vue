<template>
  <section class>
    <div>
      <table>
        <thead>
          <th>開催日</th>
          <th>イベント名</th>
          <th>会場</th>
          <th>参加人数</th>
        </thead>
        <tbody>
          <tr v-for="item in results" :key="item.id">
            <td>
              <span>{{item.Item.started_at}}</span>
            </td>
            <td>
              <a :href="item.Item.event_url">{{item.Item.title}}</a>
            </td>
            <td>
              <span>
                {{item.Item.address}}
                <br>
                {{item.Item.place}}
              </span>
            </td>
            <td>
              <span>{{item.Item.accepted}}</span>
            </td>
          </tr>
        </tbody>
      </table>
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
    return {
      results: response.Item
    };
    console.log(this.results);
  }
};
</script>
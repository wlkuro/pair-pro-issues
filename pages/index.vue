<template>
  <section>
    <div>
      <table style="border:solid 1px;">
        <thead>
          <th style="width: 50px;">Status</th>
          <th style="width: 150px;">Issue</th>
          <th style="width: 125px;">Path</th>
          <th style="width: 50px;">Date</th>
        </thead>
        <tbody style="word-wrap: break-word;">
          <tr>
            <td>start</td>
            <td>Vuejs 基礎</td>
            <td>
              <a href="/00_BootCamp/index.html">00_BootCamp</a>
            </td>
            <td>2019/12/06</td>
          </tr>
          <tr>
            <td>todo</td>
            <td>API を使って情報を取得する</td>
            <td>
              <a href="/01_getEventData/">01_getEventData</a>
            </td>
            <td>2019/11/20</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import IconLink from "~/components/IconLink.vue";

export default {
  components: {
    Logo,
    IconLink
  }
};
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

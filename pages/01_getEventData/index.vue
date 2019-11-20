// cf https://connpass.com/about/api/

// add Dependency to axios
// cf https://ja.nuxtjs.org/examples/async-data/

// todo
// display data
// started_at | title(link) | address + place| accepted
// sort started_at

import axios from "axios";

export default {
  data(){
    return{
      results:[]
    }
  },
  async asyncData({app}){
    const baseUrl ='https://connpass.com/api/v1/event/';
    return{
      results: respomse.Items
    }
  }
}
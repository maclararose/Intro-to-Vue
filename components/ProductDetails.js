app.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true,
    }
  },
  template:
  /*html*/
  `
  <h4>Details:</h4>
  <ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>
  ` 
})
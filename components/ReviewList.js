app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true,
    }
  },
  template:
  /*html*/
  `
  <div class="container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index)" :key="index">
        {{ review.name }} gave this {{ review.rating }} starts.
        <br/>
        "{{review.review}}"
      </li>
    </ul>
  </div>
  ` 
})
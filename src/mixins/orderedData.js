import { orderBy } from 'lodash';

export default {
  computed: {
    orderedData() {
      return orderBy(this.renderData, ['date'], ['desc']);
    },
  },
};

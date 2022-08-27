<template>

  <page-layout :page-title="'Wildlife'">

      <museum-highlight
          v-for="item in orderedData"
          :data="item"
          :key="'wildlife-'+ item.id">

          <template #museum-highlight__icon>
            <fa icon="fa-filter-circle-dollar" />
          </template>

      </museum-highlight>

  </page-layout>

</template>

<script>

import pageComponents from '@/mixins/pageComponents';
import orderedDataMixin from '@/mixins/orderedData';

export default {
  name: 'WildlifePage',
  mixins: [pageComponents, orderedDataMixin],
  data() {
    return {
      wildlife: [{
        date: '2020-07-05 4:10:00',
        description: 'Wildlife content will be updated soon...',
        id: 456,
        image: '',
        name: 'Wildlife 1',
        news: {
          date: '2020-08-18 18:00:00',
          title: 'Attend our talk about Dino 1 with Dr. David',
        },
        quiz: 'https://planetquiz.space',
      },
      {
        date: '2020-10-05 4:10:00',
        description: 'Wildlife content will be updated soon...',
        id: 556,
        image: 'http://picsum.photos/id/1020/300/300',
        name: 'Wildlife 2',
        news: {
          date: '2020-08-18 18:00:00',
          title: 'Attend our talk about Dino 2 with Dr. Rus',
        },
      }],
    };
  },
  computed: {
    renderData() {
      return this.wildlife;
    },
  },
};
</script>

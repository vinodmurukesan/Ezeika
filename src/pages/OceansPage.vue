<template>

<page-layout :page-title="'Oceans'">

      <museum-highlight
          v-for="item in orderedData"
          :data="item"
          :key="'oceans-'+ item.id">

          <template #museum-highlight__icon>
            <fa icon="fa-wave-square" />
          </template>

      </museum-highlight>

  </page-layout>

</template>

<script>

import pageComponents from '@/mixins/pageComponents';
import orderedDataMixin from '@/mixins/orderedData';

export default {
  name: 'OceansPage',
  mixins: [pageComponents, orderedDataMixin],
  data() {
    return {
      oceans: [{
        date: '2020-07-05 4:10:00',
        description: 'Oceans content will be updated soon...',
        id: 456,
        image: 'http://picsum.photos/id/1038/300/300',
        name: 'Oceans 1',
        news: {
          date: '2020-08-18 18:00:00',
          title: 'Attend our talk about Dino 1 with Dr. David',
        },
        quiz: 'https://planetquiz.space',
      }],
    };
  },
  computed: {
    renderData() {
      return this.oceans;
    },
  },
};
</script>

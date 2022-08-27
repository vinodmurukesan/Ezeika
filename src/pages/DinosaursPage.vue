<template>

  <page-layout :page-title="'Dinosaurs'">

      <museum-highlight
          v-for="item in orderedData"
          :data="item"
          :key="'dino-'+ item.id">

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
  name: 'DinosaursPage',
  mixins: [pageComponents, orderedDataMixin],
  data() {
    return {
      dinosaurs: [{
        date: '2020-07-05 4:10:00',
        description: 'Dinosaur content will be updated soon...',
        id: 456,
        image: 'http://picsum.photos/id/1003/300/300',
        name: 'Dino 1',
        news: {
          date: '2020-08-18 18:00:00',
          title: 'Attend our talk about Dino 1 with Dr. David',
        },
        quiz: 'https://planetquiz.space',
      },
      {
        date: '2020-10-05 4:10:00',
        description: 'Dinosaur content will be updated soon...',
        id: 556,
        image: 'http://picsum.photos/id/1024/300/300',
        name: 'Dino 2',
        news: {
          date: '2020-08-18 18:00:00',
          title: 'Attend our talk about Dino 2 with Dr. Rus',
        },
      },
      {
        date: '2020-07-05 4:10:00',
        description: 'Dinosaur content will be updated soon...',
        id: 576,
        image: '',
        name: 'Dino 3',
        quiz: 'https://planetquiz.space',
      }],
    };
  },
  computed: {
    renderData() {
      return this.dinosaurs;
    },
  },
};
</script>

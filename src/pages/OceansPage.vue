<template>
<page-layout :page-title="'Oceans'">
    <template #page-layout__data>
      <museum-highlight
          v-for="(item,i) in orderedData"
          :bg-color="item.theme ? themeCardColor : cardColor"
          :data="item"
          :fallback-image=fallbackImage
          :key="'oceans-'+ i">

          <template #museum-highlight__icon>
            <fa icon="fa-wave-square" />
          </template>

          <template #museum-highlight__news v-if="item.news">
            <news-box :news="item.news"/>
          </template>

          <template #museum-highlight__quiz v-if="item.quiz">
            <p>
              <a :href="item.quiz">click Here for the quiz</a>
            </p>
          </template>

      </museum-highlight>
   </template>
  </page-layout>
</template>

<script>

import PageLayout from '@/components/PageLayout.vue';
import MuseumHighlight from '@/components/MuseumHighlight.vue';
import NewsBox from '@/components/NewsBox.vue';
import orderedDataMixin from '@/mixins/orderedData';
import variables from '@/assets/style/_variables.scss';

export default {
  name: 'OceansPage',
  mixins: [orderedDataMixin],
  components: {
    PageLayout,
    MuseumHighlight,
    NewsBox,
  },
  data() {
    return {
      cardColor: variables.cardColor,
      themeCardColor: variables.themeCardColor,
      fallbackImage: 'http://picsum.photos/id/1000/300/300',
      renderData: [],
      oceans: [{
        date: '2020-07-05 4:10:00',
        description: 'Oceans content will be updated soon...',
        id: 456,
        image: '',
        name: 'Oceans 1',
        news: {
          date: '2020-08-18 18:00:00',
          title: 'Attend our talk about Dino 1 with Dr. David',
        },
        quiz: 'https://planetquiz.space',
      }],
    };
  },
  created() {
    this.renderData = this.oceans;
  },
};
</script>

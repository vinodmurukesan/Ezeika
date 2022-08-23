<template>
  <div class="home">
    <WellcomeWorld msg="Wellcome to our Natural History Museum App" />
  </div>
</template>

<script>
// @ is an alias to /src
import WellcomeWorld from '@/components/WellcomeWorld.vue';

export default {
  name: 'HomePage',
  components: {
    WellcomeWorld,
  },
};
</script>

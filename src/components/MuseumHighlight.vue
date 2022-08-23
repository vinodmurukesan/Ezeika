<template>
  <article class="museum-highlight" :style="themeColor">
      <div class="museum-highlight__header">
        <h2 class="museum-highlight__title">
          {{ data.name }}
        </h2>
        <div class="museum-highlight__icon">
          <slot name="museum-highlight__icon" />
        </div>
      </div>
      <div class="museum-highlight__content">
        <figure class="museum-highlight__image-wrap">
          <img class="museum-highlight__image"
          :src="data.image ? data.image : fallbackImage"
          :alt="data.name" >
        </figure>
        <slot name="museum-highlight__news"/>
        <p>{{ data.description }}</p>
        <slot name="museum-highlight__quiz"/>
      </div>
      <div class="museum-highlight__footer">
        Published: {{newsDate}}
        <div class="museum-highlight__actions">
          <slot name="museum-highlight__actions"/>
        </div>
      </div>
  </article>
</template>

<script>
import variables from '@/assets/style/_variables.scss';

export default {
  name: 'MuseumHighlight',
  props: {
    data: {
      type: Object,
      required: false,
    },
    bgColor: {
      type: String,
      required: false,
      default: variables.defaultMuseumHighlightColor,
    },
    fallbackImage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    newsDate() {
      const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      };
      const newDate = new Date(this.data.date);
      return newDate.toLocaleDateString('en-US', options);
    },
    themeColor() {
      return {
        'background-color': this.$props.bgColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

.museum-highlight {
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid $museum-highlight-border-color;
  background-color: $white;
  transition: all 0.3s ease-out;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 16px $museum-highlight__hover-box-shadow;
    background-color: $museum-highlight__hover-background-color;
  }

  &__icon {
    position: absolute;
    right: -10px;
    top: -10px;
  }

  &__header {
    display: flex;
    height: 52px;
    justify-content: space-between;
    align-items: center;
  }

  &__image-wrap {
    padding: 0;
    margin: 0;
  }

  &__image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  &__footer {
    align-self: flex-end;
    padding: 10px;
  }

  @media only screen and (min-width: map-get($grid-breakpoints, 'md')) {
    flex-basis: calc(25% - 42px);
    width: calc(25% - 42px);
    max-width: calc(25% - 42px);
  }
}

</style>

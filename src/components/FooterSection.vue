<template>
  <footer class="footer" aria-label="Footer">
    <p>
      <small>&copy; {{ new Date().getFullYear() }} All Right Reserved.</small>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 10px 20px;
  color: #fff;
  background-color: #000;
}
</style>

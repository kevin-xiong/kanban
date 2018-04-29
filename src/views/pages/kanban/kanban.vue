<template>
  <div >
    kanban
    <div
    v-for="(item, index) in projects"
              :key="index">
    {{item.name}}</div>
  </div>
</template>
<style>
/* @import './login.css'; */
</style>
<script>
import * as api from '../../api'
export default {
  name: 'kanban',
  mounted: function () {
    this.$store.dispatch('kanban/FETCH')
  },
  computed: {
    projects () {
      return this.$store.state.kanban.list
    }
  }
}
</script>
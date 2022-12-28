<template>
  <v-list
    v-model:opened="opened"
    :items="computedItems"
    :lines="false"
    color="primary"
    item-props
  >
  </v-list>
</template>

<script setup lang="ts">
  // Utiltities
  import { computed, ref } from 'vue'
  import { RouteRecordNormalized, useRoute } from 'vue-router'

  // Types
  import type { Prop } from 'vue'

  const props = defineProps({
    items: {
      type: Array,
      default: () => ([]),
    } as Prop<RouteRecordNormalized[]>,
  })
  const opened = ref<string[]>([])
  const route = useRoute()

  const computedItems = computed(() => props.items?.map(item => {
    if (item.meta?.isMenuItem ?? false) {
      return {
        title: item.name,
        to: item.path,
        children: item.children,
        prependIcon: (
          opened.value.includes(item.name?.toString() ?? '') ||
          route.name === item.name?.toString()) ?
            item.meta.activeIcon :
            item.meta.inactiveIcon,
        value: item.name,
        appendIcon: item.meta.appendIcon,
      }
    }
  }))
</script>

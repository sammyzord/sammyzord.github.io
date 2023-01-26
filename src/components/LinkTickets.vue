<script setup lang="ts">
const props = defineProps({
    link: { type: String, required: true }
})

</script>

<template>
    <div class="bg-yellow-300 border-2 border-gray-900 text-gray-900 p-1 pr-2 rounded-r-full">
        <a :href="link">
            <slot></slot>
        </a>
    </div>
</template>
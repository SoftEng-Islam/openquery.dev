<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

interface BreadcrumbItem {
	label: string
	path?: string
	active: boolean
}

const breadcrumbs = computed<BreadcrumbItem[]>(() => {
	const path = route.path
	const segments = path.split('/').filter(Boolean)

	const items: BreadcrumbItem[] = [
		{
			label: 'Home',
			path: '/',
			active: path === '/',
		},
	]

	if (segments.length === 0) {
		return items
	}

	// Valid root routes that have pages
	const validRoutes = new Set(['about', 'profiles', 'sections'])

	// Build breadcrumb trail
	let currentPath = ''
	segments.forEach((segment, index) => {
		currentPath += `/${segment}`

		// Skip if it's a parameter (starts with [)
		if (segment.startsWith('[')) {
			return
		}

		const isLast = index === segments.length - 1

		// Format label from segment
		let label = segment
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')

		// Special cases
		if (segment === 'posts') {
			label = 'Blog'
		}

		// Only create clickable links for valid routes or last segment
		const hasValidPath = validRoutes.has(segment) || isLast

		items.push({
			label,
			path: hasValidPath ? currentPath : undefined,
			active: isLast,
		})
	})

	return items
})

// Show breadcrumb only if we're not on the home page
const showBreadcrumb = computed(() => route.path !== '/')
</script>

<template>
	<div v-if="showBreadcrumb" class="mb-4">
		<nav class="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
			<div
				v-for="(item, index) in breadcrumbs"
				:key="item.label"
				class="flex items-center gap-2"
			>
				<NuxtLink
					v-if="item.path && !item.active"
					:to="item.path"
					class="text-zinc-400 hover:text-emerald-400 transition-colors duration-200"
				>
					{{ item.label }}
				</NuxtLink>
				<span
					v-else
					:class="[
						'transition-colors duration-200',
						item.active ? 'text-zinc-300 font-medium' : 'text-zinc-500'
					]"
				>
					{{ item.label }}
				</span>

				<span
					v-if="index < breadcrumbs.length - 1"
					class="text-zinc-700"
				>
					/
				</span>
			</div>
		</nav>
	</div>
</template>

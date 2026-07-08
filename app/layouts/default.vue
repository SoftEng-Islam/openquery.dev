<template>
	<div class="flex flex-col min-h-screen">
		<AppNavbar />
		<div class="flex-1">
			<div class="mx-auto max-w-7xl py-4 sm:py-6 px-4">
				<AppBreadcrumb />
				<div class="flex flex-col lg:flex-row gap-8 lg:gap-6">
					<main class="flex-1 min-w-0">
						<slot />
					</main>
					<aside class="lg:w-80 lg:shrink-0">
						<div class="lg:sticky lg:top-6">
							<AppSidebar />
						</div>
					</aside>
				</div>
			</div>
		</div>
		<AppFooter />
	</div>
</template>

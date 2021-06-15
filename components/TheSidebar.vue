<template>
	<div id="sidebar" class="w-2/5 bg-yellow-400 p-8 flex flex-col">
        <TheProfile />
		
		<!--<div class="mt-6 ">
			<TheSummary />
		</div>-->
		<div class="mt-6">
			<the-profile-info />
		</div>
		<div class="mt-6">
			<TheLanguage />
		</div>
		<div class="mt-6">
			<TheSkills />
		</div>
	</div>
</template>
<style scoped>
	#sidebar{
		height: 297mm;
	}
</style>
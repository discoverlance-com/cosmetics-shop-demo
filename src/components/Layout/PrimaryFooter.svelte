<script lang="ts">
	import TwitterIcon from 'svelte-icons/fa/FaTwitter.svelte';
	import LinkedInIcon from 'svelte-icons/fa/FaLinkedin.svelte';
	import GithubIcon from 'svelte-icons/fa/FaGithub.svelte';
</script>

<footer class="max-w-7xl py-8 mx-auto border-t border-t-blue-500">
	<div class="grid md:grid-cols-2 gap-8 lg:grid-cols-3 pb-8">
		<div class="text-white">
			<p class="text-3xl font-bold">My Cosmetics</p>
		</div>
		<div class="text-white">
			<h4 class="text-2xl font-bold mb-4">Quick Links</h4>
			<div class="flex flex-col gap-3">
				<a href="/" class="hover:underline w-max">Home</a>
				<a href="/admin" class="hover:underline w-max">Admin</a>
				<a href="/admin/products" class="hover:underline w-max">Manage Products</a>
			</div>
		</div>
		<div class="text-white">
			<h4 class="text-2xl font-bold mb-4">Socials</h4>
			<div class="flex gap-6">
				<a
					href="https://twitter.com/DiscoverLance"
					target="_blank"
					class="h-7 w-7 transition-transform hover:translate-y-1 duration-300"
				>
					<TwitterIcon />
					<span class="sr-only">Visit our twitter handle</span>
				</a>

				<a
					href="https://www.linkedin.com/in/lance-armah-abraham/"
					target="_blank"
					class="h-7 w-7 transition-transform hover:translate-y-1 duration-300"
				>
					<LinkedInIcon />
					<span class="sr-only">Visit my linkedin profile</span>
				</a>

				<a
					href="https://github.com/discoverlance-com"
					target="_blank"
					class="h-7 w-7 transition-transform hover:translate-y-1 duration-300"
				>
					<GithubIcon />
					<span class="sr-only">Visit my github account</span>
				</a>
			</div>
		</div>
	</div>
	<p class="text-blue-200 border-t border-t-blue-500 pt-8">
		Copyright &copy; {new Date().getFullYear()}.{' '}
		<a href="/" class="underline"> My Cosmetics </a>
	</p>
</footer>

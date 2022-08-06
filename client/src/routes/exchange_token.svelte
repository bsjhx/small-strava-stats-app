<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';

	const code = $page.url.searchParams.get('code');
	const scopes = $page.url.searchParams.get('scope');
	console.log('scopes', scopes);
	
	if (browser) {
		if (code && scopes?.includes("activity:read_all")) {
			console.log('jest kod -> zapisz do bazy danych'); // todo add call to api to get refresh token -> store in DB
			// zapisac token w ciasteczku
			// przy wejsciu na strone zobaczyc se czy user jest zalogowany/zarejestrowany
			goto('/');
		} else {
			console.log('no panie nie dałeś uprawnień -> to nie wiem co xD');
			goto('/todos'); // goto jakas specjalna strona z przyciskiem do ponownej autoryzacji
		}
	}
</script>

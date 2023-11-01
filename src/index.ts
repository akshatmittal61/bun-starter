import { fetchUser } from "./api";

(async () => {
	const myProfile = await fetchUser("akshatmittal61");
    console.log(myProfile);
    document.body.innerHTML = `<pre>${JSON.stringify(myProfile, null, 2)}</pre>`;
    document.title = myProfile.name;
})();

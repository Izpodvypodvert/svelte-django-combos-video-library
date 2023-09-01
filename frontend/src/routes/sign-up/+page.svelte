<script>
    import { push } from "svelte-spa-router";

    import { state } from "../../store";

    let username = "",
        email = "",
        password = ""

    const signup = async () => {
        
        if (!checkform) {
            
            return;
        }
        try {
            await state.signup(email, password, username);
            //await state.login(email, password);
            username = email = password = "";
            window.location = '/';
        } catch (error) {
            console.log(error)
            state.alert({ color: "red", message: error.message });
        }
    };

    $: checkform = username !== "" && email !== "" && password !== "";
</script>




<div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
    <h3 class="text-2xl font-bold text-center">Sign up</h3>
    <form on:submit|preventDefault={signup}>
        <div class="mt-4">
            <div>
                <label class="block" for="email">Email<label>
                        <input 
                            type="text"
                            placeholder="Email"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            bind:value={email}>
            </div>
            <div class="mt-4">
                <label class="block">Password<label>
                        <input 
                            type="password"
                            placeholder="Password"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            bind:value={password}>
            </div>
            <div class="mt-4">
                <label class="block">Username<label>
                        <input 
                            type="text"
                            placeholder="Username"
                            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                            bind:value={username}>
            </div>
            <div class="flex items-baseline justify-between">
                <button
                    disabled={!checkform}
                    type="submit" 
                    class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                    Sign up
                </button>
                <a href="/sign-in" class="text-sm text-blue-600 hover:underline">Login</a>
            </div>
        </div>
    </form>
</div>
<script>
    import { state } from "../../store";

    let email = "",
        password = "";

    const login = async () => {
        if (!checkForm) {
            return;
        }
        try {
            await state.login(email, password);
            window.location = '/'
        } catch (error) {
            console.log(error)
            state.alert({ color: "red", message: error.message });
        }
    };

    $: checkForm = email !== "" && password !== "";
</script>
<div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
    <h3 class="text-2xl font-bold text-center">Login to your account</h3>
    <form on:submit|preventDefault={login}>
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
            <div class="flex items-baseline justify-between">
                <button
                    disabled={!checkForm}
                    type="submit" 
                    class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                <a href="/sign-up" class="text-sm text-blue-600 hover:underline">Sign-up</a>
            </div>
        </div>
    </form>
</div>

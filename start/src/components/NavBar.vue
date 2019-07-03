<template>
    <nav>
        <div class="nav-wrapper">
            <!-- <a href="#" class="brand-logo">Logo</a> -->
            <router-link to="/" class="brand-logo" tag="a">Home</router-link>

            <ul id="nav-mobile" class="right">
                <li>
                    <router-link to="/login">Login</router-link>
                </li>
                <li>
                    <router-link to="/profile">Profile</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {};
</script>


<template>
    <footer>Author: {{ author }}</footer>
</template>

<script>
export default {
    name: "QuoteUnitTextAuthor",
    props: {
        author: String
    }
};
</script>
<style>
footer {
    text-align: right;
    font-style: italic;
}
</style>


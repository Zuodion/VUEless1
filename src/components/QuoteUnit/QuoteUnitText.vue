<template>
    <div>
        <h1>The Quote</h1>
        <h2>{{ quote.title }}</h2>
        <p>{{ quote.quote }}</p>
        <QuoteUnitTextAuthor :author="quote.author"/>
    </div>
</template>

<script>
import QuoteUnitTextAuthor from "./QuoteUnitTextAuthor.vue";
import { mapGetters } from "vuex";
export default {
    name: "QuoteUnitText",
    beforeCreate() {
        this.$store.dispatch("getQuote");
    },
    computed: {
        ...mapGetters(["quote"])
    },

    components: {
        QuoteUnitTextAuthor
    }
};
</script>
<style>
.quote {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 3px auto;
    text-align: center;
}

h1 {
    color: lightcoral;
}
h2 {
    font-style: italic;
}
</style>


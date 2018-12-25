<template>
    <div>
        <button @click="selectedComponent = 'QuoteUnit'">Quote</button>
        <button @click="selectedComponent = 'QuoteUnitText'">Text</button>
        <button @click="selectedComponent = 'QuoteUnitTextAuthor'">Author</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <keep-alive><!-- Позволяет не уничтожаться компоненту и не перендероваться при переключении-->
        <component :is="selectedComponent"></component>
        </keep-alive>
        <!--<quote-unit/>-->
    </div>
</template>

<script>
import QuoteUnit from "./QuoteUnit/QuoteUnit.vue";
import QuoteUnitText from "./QuoteUnit/QuoteUnitText.vue";
import QuoteUnitTextAuthor from "./QuoteUnit/QuoteUnitTextAuthor.vue";
export default {
    name: "QuoteList",
    data() {
        return {
            selectedComponent: "QuoteUnit"
        };
    },
    components: {
        QuoteUnit,
        QuoteUnitText,
        QuoteUnitTextAuthor
    }
};
</script>


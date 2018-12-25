<template>
    <div class="quote" :class="font ? 'p2' : 'p'">
        <QuoteUnitText/>
        <button @click="changeFont">{{ buttonName }}</button>
    </div>
</template>

<script>
import QuoteUnitText from "./QuoteUnitText.vue";
export default {
    name: "QuoteUnit",
    data() {
        return {
            font: false,
            buttonName: "Зробити нормальний шрифт"
        };
    },
    components: {
        QuoteUnitText
    },
    methods: {
        changeFont() {
            this.font = !this.font;
            if (this.font) {
                this.buttonName = "Зробити шрифт жахливим і нечитабельним";
            } else {
                this.buttonName = "Зробити нормальний шрифт";
            }
        }
    }
};
</script>
<style>
p {
    font-family: inherit;
    font-style: inherit;
    font-size: 20px;
}
.p2 {
    font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>


<template>
    <canvas ref="canvas" class="qr"></canvas>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import QRCode from "qrcode";

export default class Home extends Vue {
    name = localStorage.getItem("airnumber_name") || ""
    surname = localStorage.getItem("airnumber_surname") || ""
    phoneNumber = localStorage.getItem("airnumber_phonenumber") || ""

    mounted() {
        const canvasElement = this.$refs.canvas;

        QRCode.toCanvas(canvasElement, this.name+this.surname+this.phoneNumber, (error) => {
            if (error) console.error(error)
            console.log('success!');
        })
    }
}
</script>


<style lang="scss" scoped>
.qr {
    height: 15rem;
    place-self: center;
}
</style>
<template>
    <canvas ref="canvas" class="qr"></canvas>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import QRCode from "qrcode";
import VCard from 'vcard-creator'

export default class Home extends Vue {
    name = localStorage.getItem("airnumber_name") || "air"
    surname = localStorage.getItem("airnumber_surname") || "number"
    phoneNumber = localStorage.getItem("airnumber_phonenumber") || "123456789"

    mounted() {
        const personVCard = new VCard()

        personVCard.addName(this.surname, this.name).addPhoneNumber(this.phoneNumber);

        const canvasElement = this.$refs.canvas;

        QRCode.toCanvas(canvasElement, personVCard.toString(), (error) => {
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
<template>
    <div class="page-layout">
        <AppLogo></AppLogo>
        <AppInput placeholder="Name" v-model="name"></AppInput>
        <AppInput placeholder="Surname" v-model="surname"></AppInput>
        <AppInput placeholder="Phone Number" v-model="phoneNumber" type="tel"></AppInput>
        <AppButton @click="$router.push({path:'/'})">Save</AppButton>
    </div>
</template>

<script lang="ts">
import { Vue, Watch } from 'vue-property-decorator';

export default class EditContactPage extends Vue {
    name = localStorage.getItem("airnumber_name") || ""
    surname = localStorage.getItem("airnumber_surname") || ""
    phoneNumber = localStorage.getItem("airnumber_phonenumber") || ""


    @Watch("name")
    onNameChange() {
        localStorage.setItem("airnumber_name", this.name)
    }

    @Watch("surname")
    onSurnameChange() {
        localStorage.setItem("airnumber_surname", this.surname)
    }

    @Watch("phoneNumber")
    onPhoneNumberChange() {
        localStorage.setItem("airnumber_phonenumber", this.phoneNumber)
    }
}
</script>

<style lang="scss">
.page-layout {
    background-color: #FCFCFC;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding: 1rem;
    display: grid;
    justify-content: center;
    align-content: flex-start;
}
</style>
<template>
    <button class="button"><slot></slot></button>
</template>

<style lang="scss" scoped>
.button {
    background-color: #437DC4;
    color: #fcfcfc;
    border: none;
    outline: none;
    padding: 1rem;
    border-radius: 10px;
    font-weight: bold;
    letter-spacing: 0.05em;
    margin: 2rem 0;
}
</style>
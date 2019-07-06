<template>
    <div class="footer flex">
        <div class="item"><span>作者:</span><label v-text="$t('author')"></label></div>
        <div class="item"><span>github地址：</span></div>
    </div>
</template>

<style scoped>
.footer {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

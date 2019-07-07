<template>
    <div class="footer flex">
        <div class="item">
            <span v-text="$t('author') + $t('colon')"></span>
            <label v-text="$t('author_name')"></label>
        </div>
        <div class="item">
            <span v-text="$t('github_address') + $t('colon')"></span>
            <a href="$t('link.github_link')">{{$t('link.github_link')}}</a>
        </div>
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

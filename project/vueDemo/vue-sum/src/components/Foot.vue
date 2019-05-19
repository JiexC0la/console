<template>
    <div>
        <span>
            {{$t('foot.copyright')}}
            &copy;
            {{$t('common.colon') + $t('foot.author')}}
        </span>
        <br>
        <span>
            {{$t('foot.gitHub') + $t('common.colon')}}
            <a v-bind:href="$t('foot.gitHub_link')">{{$t('foot.gitHub_link')}}</a>
        </span>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>

<template>
    <el-menu :default-active="activeIndex">
        <el-menu-item
            v-for="(item, index) in menuItems"
            :key="index"
            :index="(index + 1) + ''"
            @click="handleSelect(item)">
            <i v-bind:class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '2',
            menuItems: [{
                name: this.$t('leftMenu.classical_photos'),
                id: 'classicalPhotos',
                icon: 'el-icon-picture'
            }, {
                name: this.$t('leftMenu.noun_search'),
                id: 'nounSearch',
                icon: 'el-icon-search'
            }]
        }
    },
    methods: {
        handleSelect(item) {
            const id = item.id;
            if (id === 'classicalPhotos') {
                this.$message({
                    message: this.$t('common.not_open'),
                    type: 'warning'
                });
                this.$router.push({path: 'classicalPhotos'});
            } else if (id === 'nounSearch') {
                this.$router.push({path: 'nounSearch'});
            }
        }
    }
}
</script>

<style>

</style>

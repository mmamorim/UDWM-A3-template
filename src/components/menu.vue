<template>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
        <q-list>
            <q-item-label header>
                Menu
            </q-item-label>
            <div v-for="(item, index) in menus" :key="index" @click="clickMenu(item)">
                <q-item class="cursor-pointer">
                    <q-item-section avatar>
                        <Icon :icon="item.icon" class="text-3xl" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ item.label }}</q-item-label>
                        <q-item-label caption>
                            {{ item.descr }}
                        </q-item-label>
                    </q-item-section>
                </q-item>
            </div>
        </q-list>
    </q-drawer>
</template>
<script>
export default {
    data() {
        return {
            leftDrawerOpen: true,
            menus: [
                { label: "Tarefas", icon: "mdi:home", descr: "uma descrição" },
                { label: "Categorias", icon: "mdi:star", descr: "outra descrição" },
            ]
        }
    },
    methods: {
        toggleLeftDrawer() {
            this.leftDrawerOpen = !this.leftDrawerOpen
        },
        clickMenu(item) {
            this.$emit('selectItem',item)
        }
    },
}
</script>
<style lang="">
    
</style>
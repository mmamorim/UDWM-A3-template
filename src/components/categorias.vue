<template>
    <div>
        <div>
            Categorias
        </div>
        <div v-for="item in [1,2,3,4]">
            <div class="flex items-center gap-1">
                <q-item class="flex-1">
                    <q-item-section avatar>
                        <q-skeleton type="QAvatar" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>
                            <q-skeleton type="text" />
                        </q-item-label>
                        <q-item-label caption>
                            <q-skeleton type="text" />
                        </q-item-label>
                    </q-item-section>
                </q-item>
                <div>
                    <q-btn round>
                        <Icon icon="mdi:pencil" class="text-lg" />
                    </q-btn>
                </div>
                <div>
                    <q-btn round>
                        <Icon icon="mdi:delete" class="text-lg" />
                    </q-btn>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>
<template>
    <div>
        <div class="row">
            <div class="col-4">
                <q-date v-model="date" />
            </div>
            <div class="col-8">
                <div class="border rounded bg-gray-200 p-1">
                    Tarefas {{ date }}
                </div>
                <q-list bordered>
                    <div v-for="(item, index) in tarefas" :key="index">
                        <q-expansion-item expand-separator icon="perm_identity" label="Account settings" caption="John Doe">
                            <q-card>
                                <q-card-section>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos
                                    corrupti
                                    commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto
                                    suscipit iste
                                    eveniet doloribus ullam aliquid.
                                </q-card-section>
                            </q-card>
                        </q-expansion-item>
                    </div>
                </q-list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            date: '2023/11/06',
            tarefas: [
                { id: 1, title: "Uma tarefa", date: "12/01/2023" },
                { id: 1, title: "Uma tarefa", date: "12/01/2023" }
            ]
        }
    },
}
</script>
<style lang="">
    
</style>
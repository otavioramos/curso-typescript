<template>
    <div>
        <h1>Contador (Classe)</h1>
        <h2>{{ getValor() }}</h2>
        <h3>{{ getParOuImpar() }}</h3>
        <h3>{{ parOuImpar }}</h3>
        <button @click="setValor(-1)">Dev</button>
        <button @click="setValor(1)">Inc</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ContadorClasse extends Vue {
    @Prop(Number) private readonly valorInicial?: number
    private valor = this.valorInicial || 0

    public setValor(delta: number) {
        this.valor += delta;
    }

    public getValor(): number {
        return this.valor;
    }

    public getParOuImpar(): string {
        return this.valor % 2 === 0 ? "Par" : "Ímpar";
    }

    public get parOuImpar(): string {
        return this.valor % 2 === 0 ? "Par" : "Ímpar";
    }
}
</script>

<style>

</style>
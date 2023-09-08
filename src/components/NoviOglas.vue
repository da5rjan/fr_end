
<template>

    <h1>Stvaranje  novog oglasa!</h1>
    <form>
        <label for = "inputNaziv"> Naziv</label>
        
        <input name="inputNaziv" v-model = "naslov"/>
        <h1> cijena </h1>
    <label for = "inputCIjena">Cijena </label> 
    <input name="inputCijena" v-model ="cijena" />      
    <h1>opis</h1> 
        <label for ="inputopis"/> 
        <input name = "inputopis" v-model = "text"/>
        <div>
            <button @click="posalji_pod()">posalji</button>  
        </div>
    </form>
</template>





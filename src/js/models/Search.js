import axios from 'axios';
export default class Search{
    constructor(query){
        this.query = query;
    }
    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '88fb27631901e39bf701c6e786014908';
        try{
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.recipes);
        }catch (error){
            alert(error);
        }   
    }
}
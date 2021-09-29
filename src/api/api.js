import {ref,reactive} from "vue"

let cou = ref(0);
let man = reactive({
    name: 'airmanx',
    age: 40
});
const go = (() => {
    cou.value++;
    man.age++;
    console.log(cou.value);
});

export {cou,man,go}
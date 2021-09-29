<template>
  <div>
    {{ title }}-{{cou}}
    <button @click="go">add</button>
    {{man.name}}-{{man.age}}
  </div>
</template>
<script>
import {cou,man,go} from "api/api";
export default {
    props:{
        title:
        {
            type:String,
            default:"hello vue3"
        }
    },
    setup(props) {
      return {
        cou,go,man
      }
    },
}
</script>
<template>
  <div>
    {{ title }}
  </div>
</template>
<script>
export default {
    props:{
        title:
        {
            type:String,
            default:"hello vue3"
        }
    },
    setup(props) {
        
    },
}
</script>
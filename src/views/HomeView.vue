<template>



  <div class="home">
    <!-- belo wline is imported from components, hello world-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <P>This is my home page</P>
    <div>

    </div>
    
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

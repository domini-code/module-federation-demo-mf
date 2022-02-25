<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl h-96">
    <div id="header">  
    </div>
    <div>Name: blog</div>
    <div>Framework: vue3</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
</template>
<script setup>
  import {onMounted} from 'vue';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import Header from 'dominicode/Header';

  onMounted(
    ()=> {
      ReactDOM.render(React.createElement(Header), document.getElementById('header'));
    }
  );
</script>
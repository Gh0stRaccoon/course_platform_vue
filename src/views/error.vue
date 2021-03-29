<template>
  <div class="error_404">
    <div class="helper">
      <h1>404</h1>
      <p>Esta página no existe</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>
<style scoped>
.error_404 {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.helper {
  text-align: center;
  animation: changeSize 2s linear infinite;
}

.error_404 h1 {
  font-size: 80px;
  color: #f76b1c;
}
.error_404 p {
  font-size: 24px;
}

@keyframes changeSize {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
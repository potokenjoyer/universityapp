<template>

 <div class="main">
    <div class="input-form">
      <div class="logoname">
        <a href="https://mtuci.ru/"><img src="/logoname.png" alt="Logo"></a>
      </div>      
      <div class="logo">
        <img src="/logo.png" alt="Logo">
      </div>
      <form>
        <input placeholder="Логин"/>
        <input placeholder="Пароль"/>
        <button class="btn-authorize" @click="">
          <span>Войти</span>
        </button>
      </form>
    </div>     
  </div> 
</template>

<style scoped>
.main {
  display: flex;
  background-color: #FFFFFF;
  width: 500px;
  height: 730px;
  border-radius: 30px;
  margin-top: 50px;
}

form {
  text-align: center;
  position: relative;  
}

input {
  width: 436px;
  height: 54px;
  margin-top: 30px;
  background-color: #E8F0FE;
  border-radius: 15px;
  border: none;
  font-size: 18px;
  padding: 10px;
}

.btn-authorize {
  width: 436px;
  height: 54px;
  margin-top: 40px;
  background-color: #0642CD;
  border-radius: 15px;
  border: none;
  font-size: 18px;
}
.btn-authorize:hover{
  background-color: #0538af;
}
::placeholder {
  font-size: 18px;
  color: #00000043;
  padding-left: 0px;
}

span {
  color: #FFFFFF;
}

.logoname {
  display: flex;
}

.logo {
  display: flex;
  margin-bottom: 47px;
}
img {
  margin: 0 auto;
  margin-top: 57px;
}
a {
  display: flex;
  margin: 0 auto;
}
</style>

<script>

</script>
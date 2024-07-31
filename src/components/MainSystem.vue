<template>
    <div class="main">
        <div class="logo-holder">
            <div class="image-holder">
                <div class="logoname">
                    <a href="https://mtuci.ru/"><img src="/logoname.png" alt="Logo"></a>
                </div>
                <div class="logo">
                    <a href="https://mtuci.ru/"><img src="/logo.png" alt="Logo"></a>
                </div>
            </div>
        </div>
        <div class="wrapper-table">
            <div class="table">
                <ul>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>

</script>

<style  scoped>
ul {
    color: black;
}
.main {
    display: flex;
    width:100%;
}
.logoname {
    margin-bottom: 10px;
}
.image-holder {

}
.logo-holder {
    display: flex;
    align-items: center;
    margin-left: 30px;

}

.wrapper-table {
    display: flex;
    margin-left: 80px
}
.table{
    margin-top: 50px;
    margin-bottom: 50px;
    border: 1px solid black;
    width: 1300px;
    border-radius: 50px;
}
</style>
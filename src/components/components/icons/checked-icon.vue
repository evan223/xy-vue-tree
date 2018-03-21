<template>
    <div>
        <canvas id="checked-icon" width="15px" height="15px"></canvas>
    </div>
</template>

<script>
    export default {
        name: 'checked-icon',
        mounted () {
            const checkedIcon = document.querySelector('#checked-icon')
            let ctx = checkedIcon.getContext('2d');
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0,7);
            ctx.lineTo(6,15);
            ctx.lineTo(15,1);
//            ctx.strokeStyle = '#000';
            ctx.stroke();
        }
    }
</script>

<style scoped>
</style>
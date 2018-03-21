<template>
    <div>
        <canvas id="tri-icon" width="15px" height="15px"></canvas>
    </div>
</template>

<script>
    export default {
        name: 'tri-icon',
        mounted () {
            const icon = document.querySelector('#tri-icon')
            let ctx = icon.getContext('2d');
            ctx.lineCap = "square";
            ctx.beginPath();
            ctx.moveTo(6,7);
            ctx.lineTo(12,7);
            ctx.lineTo(9,11)
            ctx.closePath()
            ctx.fill()
//            ctx.strokeStyle = '#000';
        }
    }
</script>

<style scoped>
</style>
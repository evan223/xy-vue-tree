<template>
    <div>
        <canvas id="plus-icon" width="15px" height="15px"></canvas>
    </div>
</template>

<script>
    export default {
        name: 'plus-icon',
        mounted () {
            const checkedIcon = document.querySelector('#plus-icon')
            let ctx = checkedIcon.getContext('2d');
            ctx.lineCap = "square";
            ctx.beginPath();
            ctx.moveTo(0,7);
            ctx.lineTo(14,7);
//            ctx.strokeStyle = '#000';
            ctx.stroke();

            ctx.save()

            ctx.beginPath();
            ctx.moveTo(7,0);
            ctx.lineTo(7,14);
            ctx.save();
            ctx.restore();


            ctx.stroke();

        }
    }
</script>

<style scoped>
</style>
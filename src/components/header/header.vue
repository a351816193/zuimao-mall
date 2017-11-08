<template>
    <div class="header">
        <div class="header-warpper">
            <router-link to="/invite" class="nav-wrap-left icon icon-user">
            </router-link>
            <div class="centermenu">
                <i>醉猫商城</i>
            </div>
            <router-link to="/searchMenu" class="nav-wrap-right icon icon-search">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './../../common/sass/global.scss';
.header
{
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    left: 0;
    height: .6rem;

    background: $primarycolor;
    .header-warpper
    {
        position: relative;

        display: flex;

        height: 100%;

        text-align: center;

        background: $primarycolor;

        align-items: center;
        justify-content: space-between;
        .icon
        {
            width: 0.666667rem;
            font-size: 26px;
            color: #fff;
            line-height: .6rem;
        }
        .nav-wrap-left,
        .nav-wrap-right
        {
            position: absolute;
        }
        .nav-wrap-right
        {
            right: 0;
        }
        .nav-wrap-left
        {
            left: 0;
        }
        .centermenu
        {
            display: block;
            font-size: .24rem;

            text-align: center;

            -webkit-box-flex: 1;
               -moz-box-flex: 1;
            -webkit-flex: 1;
                -ms-flex: 1;
                    flex: 1;
            i
            {
                color: #eee;
            }
        }
    }
}
</style>

<template>
    <div class="product-list">
        <div v-for="pro in products">
            <a href="{{ pro.pro_url }}">
                <img class="product-name" src="{{ pro.img_src }}">
                <div class="caption">
                    <i>{{ pro.tag }}</i>
                    <b>{{ pro.pro_title }}</b>
                </div>
                <p class="price">
                    <span class="ori-price icon-yen">{{ pro.title }}</span>
                    /<span class="earn icon-zhuan">{{ pro.own }}</span>
                </p>
            </a>
            <div class="pcs-action">
                <div class="pcs">
                    库存{{ pro.stock }}
                </div>
                <div class="more-actions">
                    <i class="icon-put"></i>
                    <i class="icon-image"></i>
                    <i class="icon-report"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
  export default {

  }
</script>
<style lang="scss">
.product-list {
    .product {
        width: 100%;
        margin-top: 10px;
        padding-bottom: 10px;

        background-color: #fff;
        .product-info {
            display: inline-block;

            width: 100%;
        }
        .product-img {
            display: inline-block;

            width: 10rem;
            height: 4.533333rem;
        }
        .caption {
            font-size: 16px;
            font-weight: bold;
            line-height: 1.5em;

            padding: 0 5px;

            color: #333;
            .icon-hot:before {
                color: $primarycolor;

                align-items: center;
            }
        }
        .price {
            font-size: 16px;

            color: #999;
            .icon-yen:before,
            .icon-zhuan:before {
                font-size: 13px;

                margin-right: 5px;
                margin-left: 5px;
            }
            .ori-price {
                color: #4d4d4d;
            }
            .earn {
                color: $primarycolor;
            }
        }
        .pcs-action {
            display: flex;

            padding: 5px 10px;

            justify-content: space-between;
            align-items: center;
            .pcs {
                font-size: 12px;

                color: #ccc;
            }
            .more-actions {
                font-size: 20px;

                display: flex;

                width: 30%;

                color: #333;

                justify-content: space-between;
            }
        }
    }
}
</style>

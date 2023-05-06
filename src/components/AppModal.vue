<template>
  <div class="modal" v-if="isOpen" @click="handleClose">
    <div class="modal__container" @click.stop>
        <div class="modal__header">
            <h1 class="modal__title">{{ title }}</h1>
            <div class="modal__close" @click="handleClose">
                <i class="fa fa-times"></i>
            </div>
        </div>
        <div class="modal__body">
            <slot></slot>
        </div>
        <div class="modal__footer">

        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean
        },
        title:{
            type:String
        },
        handleCloseModal:{
            type: Function
        }
    },
    methods: {
        handleClose (){
            this.handleCloseModal()
        }
    }
}
</script>

<style>
    .modal {
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
        display: flex;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
    }
    .modal__container{
        width: 950px;
        min-height: 200px;
        margin: 20px auto;
        background: white;
        padding: 0 10px;
    }

    .modal__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .modal__close{
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 50%;
        text-align: center;
        font-size: 24px;
    }

    .modal__close:hover{
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
</style>
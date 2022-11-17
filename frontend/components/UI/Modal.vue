<template>
  <Transition name="modal">
    <div v-if="show" class="fixed z-50 top-0 left-0 w-full h-full bg-black/30 table transition-opacity">
      <div class="table-cell align-middle">
        <div class="w-[500px] my-0 mx-auto bg-white rounded shadow-md transition-all">
          <header class="modal-header bg-zinc-200 mb-4 p-4 text-center rounded-t relative">
            <p name="header" class="text-lg">{{ props.title }} <strong>{{ props.destaque }}</strong>?</p>
            <UIIcon icon="akar-icons:cross" txtSize="text-xl" 
              class="absolute right-5 top-4 bg-zinc-300 hover:bg-zinc-400 w-8 h-8"
              @click="$emit('close')"
            />
          </header>

          <div class="my-5 mx-2 text-center" v-if="props.hasBody" >
            <slot></slot>
          </div>

          <div>
            <slot name="footer">
              <div class="mx-auto flex justify-evenly w-[80%] pb-4">
                <button 
                  class="bg-green-400 hover:bg-green-500"
                 :class="btnsClass"
                  @click="emitConfirm"
                 >Confirmar</button>
                <button 
                  class="bg-red-400 hover:bg-red-500"
                 :class="btnsClass"
                  @click="emitCancel"
                 >Cancelar</button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const emit = defineEmits(['close', 'confirmar', 'cancelar']);

const props = defineProps({ 
  show: {type: Boolean, required: true },
  hasBody: {type: Boolean, default: false },
  title: {type: String, required: true },
  destaque: {type: String, required: true },
});

const btnsClass = ref('h-7 w-24 flex items-center justify-center font-semibold');

const emitConfirm = () => {
  emit('confirmar');
  emit('close');
}

const emitCancel = () => {
  emit('cancelar');
  emit('close');
}
/*** USAGE
 * <div>
      <button id="show-modal" @click="showModal = true">Show Modal</button>

      <Teleport to="body">
        <UIModal :show="showModal" @close="showModal = false">
          <template #header>
            <h3>custom header</h3>
          </template>
        </UIModal>
      </Teleport>
    </div>
 */
</script>

<style>
/* .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
} */


/* ANIMATIONS */
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

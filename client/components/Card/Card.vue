<template>
  <div
    class="app-card"
    v-bind:class="{'available': available, 'selected': selected}"
    v-on:click="onClick ? onClick(index, card) : null"
  >
    <div class="app-card-header">
      <b-row>
        <b-col>
          <b-badge pill variant="warning">{{card.stamina}} <i class="fa fa-circle"></i></b-badge>
        </b-col>
        <b-col class="text-right">
          <b-badge pill variant="danger">{{card.intensity}} <i class="fa fa-fire fa-lg"></i></b-badge>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <h2>{{card.name}}</h2>
        </b-col>
      </b-row>
    </div>

    <div class="app-card-body text-center">
      <b-row>
        <b-col>
          <img class="img-thumbnail" :src="card.img" :alt="card.name" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>{{card.description}}</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: { type: Number, required: true },
    card: { type: Object, required: true },
    available: { type: Boolean, required: true },
    selected: { type: Boolean, required: true },
    onClick: Function
  }
};
</script>

<style>
.app-card {
  opacity: 0;
  border-radius: 10px;
  height: 600px;
  width: 250px;
  border: 3px solid white;
  background: #343a40;
  color: white;
  top: 0;
  transition: top 0.1s ease-in;
}
.app-card:hover {
  position: relative;
  cursor: pointer;
  top: -250px;
}
.app-card.available {
  opacity: 1;
}
.app-card.selected {
  box-shadow: 0 4px 8px 2px red, 0 6px 20px 0 red;
}
.app-card-header {
  padding: 2px;
  border-bottom: 1px solid grey;
  margin-bottom: 5px;
  font-size: 1.2em;
}
.app-card-header h2 {
  margin: 0px;
  padding: 0px;
}
.app-card-body {
  padding: 0px 10px;
}
</style>


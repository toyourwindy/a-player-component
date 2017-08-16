Vue.component("my-card",{
	template:'<div class="singcard"><div class="header"><img id="img" v-bind:src="obj.pic_url" alt="PIC"/></div><div class="caption"><p>{{obj.card}}</p><p>{{obj.name}}</p></div> <audio id="song" v-bind:src="obj.media_url" >Your browser does not support the audio element.</audio></div>',
	props:['obj']
})
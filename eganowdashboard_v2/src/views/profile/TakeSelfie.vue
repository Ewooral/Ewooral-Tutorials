<template>
     <div>
         <video ref="video" @canplay="InitCanvas">Stream unavailable</video>
         <button class="btn btn-success" @click="TakePicture">Take picture</button>
<!--         <button class="btn btn-danger" @click="RemoveImage">Remove picture</button>-->
         <canvas ref="canvas" style="display: none"/>
     </div>
</template>

<script>
    export default {
        name: "TakeSelfie",
        data(){
            return {
                video:null,
                canvas : null
            }
        },
        mounted() {
            this.canvas = this.$refs.canvas
            this.video = this.$refs.video
            this.StartCapture()
        },
        methods : {
            StartCapture() {
                navigator.mediaDevices.getUserMedia({video : true, audio : false}).then(stream => {
                    this.video.srcObject = stream
                    this.video.play()
                }).catch(error => {
                    console.log("Video error : ", error)
                })
            },
            TakePicture(){
             let context = this.canvas.getContext("2d")
                context.drawImage(this.video,0,0,this.video.videoWidth,this.video.videoHeight)
                 // const min_height = 512;
                 // if(this.canvas.height  < min_height) {
                 //      this.canvas.height  = min_height
                 //    console.log(" Height : ", this.canvas.height)
                 // }

               //  console.log(`Image width : ${this.canvas.width} and height is : ${this.canvas.height}`)
                this.$emit('picture-taken',this.canvas.toDataURL('image/png'))
                // this.video.pause();
                // this.stream.stop();
            },
            RemoveImage(){
               console.log(" hello")
            },
            InitCanvas(){
                this.canvas.setAttribute('width', this.video.videoWidth)
                this.canvas.setAttribute('height', this.video.videoHeight)
            }
        }
    }
</script>

<style scoped>

</style>
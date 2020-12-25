<template>
    <div class="hero hero__banner bg-color-dark">
        <input type="file" @change="onFileSelected">
        <button @click="onUpload">Upload</button>
    </div>
</template>

<script>
    import data from '../data/hero.json';
    import axios from 'axios'
    export default {
        data () {
            return {
                selectedFile: null
            }
        },
        methods: {
            onFileSelected(event){
                this.selectedFile = event.target.files[0]
            },
            onUpload() {
                const fd = new FormData();
                fd.append('image',this.selectedFile, this.selectedFile.name)
                axios.post('../data/golf', fd
                .then(res => {
                    console.log(res)
                }))

            }
        }
    };
</script>

<style lang="scss">
    @import '../assets/scss/_variables.scss';

    .hero {
        &__content {
            color: $theme-color-primary;
            max-width: 570px;
            float: right;
            // res
            @media #{$md-device}{
                max-width: 330px;
                padding-top: 75px;
            }
            @media #{$sm-device}{
                max-width: 472px;
                margin: auto;
                float: none;
                text-align: center;
                padding-top: 130px;
            }

            &--subtitle {
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 30px;
                font-family: $heading-font;
                span {
                    color: $white;
                }
                // res
                @media #{$sm-device}{
                    margin-bottom: 15px;
                }
            }
            &--title {
                font-size: 48px;
                font-weight: 700;
                font-family: $heading-font;
                // res
                @media #{$md-device, $sm-device}{
                    font-size: 36px;
                }
                @media #{$xs-device}{
                    font-size: 30px;
                }
            }
        }
        &__thumb {
            margin-top: 100px;
            // res
            @media #{$sm-device}{
                margin-top: 30px
            }
            &--one {
                position: absolute;
                top: 100px;
                right: 100px;
                // res
                @media #{$sm-device} {
                    top: 0;
                    right: 0;
                }
            }
            &--two {
                position: relative;
            }
        }
    }
</style>
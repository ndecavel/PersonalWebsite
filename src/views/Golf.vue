<template>
    <div class="main-container">
        
        <Header />

        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="breadcrumb-wrap text-center">
                            <div class="section-title">
                                <span class="water-text">Golf App</span>
                                <h1 class="title">Golf App</h1>
                            </div>
                            <nav aria-label="breadcrumb">
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <router-link to="/">Home</router-link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Swing Thing
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SwingView />



    </div>
</template>

<script>
    import Header from '@/components/Header';
    import SwingView from '@/components/SwingView'


    export default {
        components: {
            Header,
            SwingView
        },
        metaInfo: {
            title: 'Golf',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
        
    }
</script>

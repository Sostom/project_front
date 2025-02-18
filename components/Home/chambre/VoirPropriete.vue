<template>
    <div class="project-single area-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="single-client mar-well">
                        <a href="#">
                            <h3>Informations fournies </h3>
                        </a>
                        <p>
                            Trouvez dans cette section, toutes les informations renseignées par le propriétaire. En examinant, vous saurez si celle là vous convient. </br>
                        </p>
                    </div>
                </div>   
                <div class="col-md-12 col-sm-12 col-xs-12 row">
                     
                    <div class="contain">
                        <div class="row" id="slider" v-if="photos">
                            <div id="myCarousel" class="carousel slide">
                                <div class="carousel-inner" @mouseenter="stopLoop" @mouseleave="startLoop">
                                    <div
                                        v-for="(photo, index) in photos"
                                        :key="index"
                                        class="item"
                                        :class="{ active: index === activeIndex }"
                                        :data-slide-number="index"
                                    >
                                        <img :src="'http://localhost:8000/' + photo.picture.path" />
                                    </div>
                                </div>

                                <!-- Contrôles -->
                                <a class="left carousel-control" href="#myCarousel" role="button" @click="prevSlide">
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true">
                                    <i class="fa fa-arrow-left"></i>
                                </span>
                                </a>
                                <a class="right carousel-control" href="#myCarousel" role="button" @click="nextSlide">
                                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true">
                                    <i class="fa fa-arrow-right"></i>
                                </span>
                                </a>
                            </div>

                            <!-- Miniatures -->
                            <div class="row">
                                <div class="col-md-12" id="slider-thumbs">
                                <ul class="list-inline">
                                    <li
                                    v-for="(photo, index) in photos"
                                    :key="index"
                                    class="img-petit"
                                    @click="changeSlide(index)"
                                    >
                                    <a>
                                        <img :src="'http://localhost:8000/' + photo.picture.path" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-md-8 col-sm-6 col-xs-12">
                    <div class="feature_zone ">
                        <h6 class="feature_info">{{ propriete.feature }}</h6>
                        <div class="center" v-if="propriete.ville">
                            <i class="fa fa-globe" aria-hidden="true"></i> {{ propriete.ville.name }}
                        </div>
                        <div class="center" v-if="propriete.quartier">
                            <i class="fa_feature fa fa-map-marker" aria-hidden="true"></i> Quartier {{ propriete.quartier.name }}
                        </div>
                        <div class="" v-if="propriete.indication">
                            <hr>
                            <div class="div_info_ind"> 
                                <span class="div_info_indiv"><i class="fa_feature fa fa-location-arrow" aria-hidden="true"></i> Indication :</span>
                                <p>{{ propriete.indication }}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="feature_zone ">
                        <h6 class="feature_title">Informations générales</h6>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="div_info_ind"> <i class="fa_feature fa fa-money" aria-hidden="true"></i> {{ propriete.loyer }} F CFA</div>
                                <div class="div_info_ind"> <i class="fa_feature fa fa-bath" aria-hidden="true"></i> {{ propriete.type }}</div>
                                <div class="div_info_ind"> <i class="fa_feature fa fa-handshake-o" aria-hidden="true"></i>Type Caution : {{ propriete.caution_type }} <br>
                                <span class="details">(X avance - X loyer - X démarcheur )</span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="div_info_ind"> <i class="fa_feature fa fa-home" aria-hidden="true"></i> {{ propriete.nbre_habitation }} ménages dans la maison </div>
                                <div class="div_info_ind"> <i class="fa_feature fa fa-shower" aria-hidden="true"></i> {{ propriete.nbre_douche }} douche</div>
                                <div class="div_info_ind"> <i class="fa_feature fa fa-cutlery" aria-hidden="true"></i> {{ propriete.nbre_cuisine }} cuisine</div>
                            </div>
                        </div>
                    </div>
                    <div class="feature_zone ">
                        <h6 class="feature_title">Détails supplémentaires</h6>
                        <div class="">
                            <div class="">
                                <div class="div_info_ind"> <i class="fa fa-building" aria-hidden="true"></i> Compteur SBEE Individuel : {{ propriete.compteur }} </div>
                                <div class="div_info_ind"> <i class="fa_feature fa fa-envelope" aria-hidden="true"></i> Caution Eau et Electricité : {{ propriete.caution_eau_electricite }} F CFA</div>
                                <div class="div_info_ind"> <i class="fa_feature fa fa-car" aria-hidden="true"></i> Accès Véhicule : {{ propriete.garage }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="feature_zone" v-if="propriete.autres">
                        <h6 class="feature_title">Autres informations concernant la propriété</h6>
                            <div class="">
                                {{ propriete.autres }}
                            </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12" v-if="propriete.user">
                    <!-- strat single area -->
                    <div class="single-page-head">
                        <div class="clients-testi">
                            <div class="single-review text-center">
                                <div class="review-img">
                                    <img
                                        src="/img/user.png"
                                        alt=""
                                    />
                                </div>
                                <div class="review-text">
                                    <h4>{{propriete.user.name}}</h4>
                                    <span class="guest-rev"
                                        >Propriétaire -
                                        <a href="#">Chez Nous</a></span
                                    ><br><br>
                                    <p>Tout savoir sur le propriétaire</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-menu">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="active">
                                <a
                                    href="#p-view-1"
                                    role="tab"
                                    data-toggle="tab"
                                >
                                    <span class="cha-title"
                                        >Contacts</span
                                    >
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#p-view-2"
                                    role="tab"
                                    data-toggle="tab"
                                >
                                    <span class="cha-title"
                                        >Avis & Score</span
                                    >
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="tab-content">
                        <!--Start Tab Content -->
                        <div class="tab-pane active" id="p-view-1">
                            <div class="tab-inner">
                                <div class="single-machine row">
                                    <ul>
                                        <li>
                                            <span> <i class="fa fa-phone-square" aria-hidden="true"></i> </span>
                                            <a href="#"
                                                >  {{ propriete.user.phone }}</a
                                            >
                                        </li>
                                        <li v-if="propriete.user.email">
                                            <span><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                                            <a href="#"
                                                >{{ propriete.user.email }}</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane" id="p-view-2">
                            <div class="tab-inner">
                                <div class="single-machine row">
                                    Cette section n'est pas encore disponible.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            
            <div class="row similaire" v-if="proprietes_similaires">
                <h4 class="text-center">Propriétes similaires</h4>
                <div class="blog-grid home-blog" >
                    <div class="col-md-4 col-sm-6 col-xs-12" v-for="(propriete, j) in proprietes_similaires" :key="j">
                        <div class="single-blog">
                            <div class="blog-image">
                                <a class="image-scale" href="#">
                                    <img :src="'http://localhost:8000/'+propriete.propriete_pictures[0].picture.path" alt="" v-if="propriete.propriete_pictures.length > 0 "/>
                                    <img src="/img/no-img.png" alt="" v-else-if="propriete.propriete_pictures.length == 0 ">
                                    <!-- <img src="/img/blog/b1.jpg" alt=""> -->
                                </a>
                                <p class="propriete_loyer">
                                    {{propriete.loyer}} F
                                </p>

                                <!-- <p class="propriete_type">
                                    {{propriete.type}}
                                </p> -->
                            </div>

                            <div class="blog-content">
                                <div class="blog-meta row">
                                    <span class="admin-type col-md-4">
                                        <i class="fa fa-home "></i>
                                        {{propriete.type}}
                                    </span>
                                    <span class="date-type col-md-4">
                                        <i class="fa fa-map-marker"></i>
                                        {{propriete.ville.name}}
                                    </span>
                                    <span class="comments-type col-md-4">
                                        <i class="fa fa-handshake-o"></i>
                                        {{propriete.caution_type}}
                                    </span>
                                </div>
                                <a href="#">
                                    <p class="propriete_features">
                                        {{ propriete.feature }}
                                    </p>
                                </a>
                            </div>
                            <div class="propriete-actions text-center">
                                <p>Actions</p>
                                <ul class="social-icon">
                                    <NuxtLink :to="'/proprio/propriete/voir/'+propriete.id"><li><a class="facebook" href=""><i class="fa fa-search-plus" aria-hidden="true"></i></a></li></NuxtLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VoirPropriete",
    
    data() {
        return {
            activeIndex: 0, // Index de l'image active
            loopInterval: null, // Stocke l'ID de l'interval
            propriete: [],
            proprietes_similaires: [],
            contents: [],
            errors: [],
            error: null,
            selectedFile: null,
            photos: [],
            photoId: null,
            error_modal: null,
            success_modal: null,
            proprieteId: null
        };
    },
    mounted() {
        this.startLoop();
        this.getPropriete();
        this.proprieteId = this.$route.params.id;
    },
    beforeDestroy() {
        clearInterval(this.loopInterval); // Nettoie l'interval quand le composant est détruit
    },

    methods: {
        // Change l'image active
        changeSlide(index) {
        this.activeIndex = index;
        },
        
        // Slide suivant
        nextSlide() {
        this.activeIndex = (this.activeIndex + 1) % this.photos.length; // Boucle sur les images
        },
        // Slide précédent
        prevSlide() {
        this.activeIndex =
            (this.activeIndex - 1 + this.photos.length) % this.photos.length;
        },

        // Démarre le loop
        startLoop() {
        if (!this.loopInterval) {
            this.loopInterval = setInterval(() => {
            this.nextSlide();
            }, 4000); // Change d'image toutes les 3 secondes
        }
        },
        // Stoppe le loop
        stopLoop() {
            clearInterval(this.loopInterval);
            this.loopInterval = null;
        },

        carouse(){
            $('#myCarousel').carousel({
                interval: 3000
            });

            // This event fires immediately when the slide instance method is invoked.
            $('#myCarousel').on('slide.bs.carousel', function (e) {
                var id = $('.item.active').data('slide-number');
                    
                // Added a statement to make sure the carousel loops correct
                    if(e.direction == 'right'){
                    id = parseInt(id) - 1;  
                if(id == -1) id = 7;
                } else{
                    id = parseInt(id) + 1;
                    if(id == $('[id^=carousel-thumb-]').length) id = 0;
                }
            
                $('[id^=carousel-thumb-]').removeClass('selected');
                $('[id=carousel-thumb-' + id + ']').addClass('selected');
            });

            // Thumb control
            $('[id^=carousel-thumb-]').click( function(){
            var id_selector = $(this).attr("id");
            var id = id_selector.substr(id_selector.length -1);
            id = parseInt(id);
            $('#myCarousel').carousel(id);
            $('[id^=carousel-thumb-]').removeClass('selected');
            $(this).addClass('selected');
            });
        },
        closeModal() {
            this.selectedFile = null;
            this.success_modal = null;
            this.error_modal = null;
            const currentUrl = window.location.href.split("#")[0];
            window.history.replaceState(null, null, currentUrl);
        },
        
        no_action(){
            window.location.reload();
            this.closeModal()
        },

        chargeId(id){
            this.photoId = id
        },

        getPropriete() { 
            this.$axios.get('/chambres/'+ this.$route.params.id)
            .then(response =>{
                console.log(response.data.data);
                this.propriete = response.data.data.propriete
                this.proprietes_similaires = response.data.data.proprietes_similaires
                this.photos = response.data.data.propriete.propriete_pictures
            })
        },
    }

};
</script>

<style scoped>
</style>

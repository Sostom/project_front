<template>
    <div class="blog-area fix area-padding-2">
        <div class="container">
            <div class="single-client mar-well">
                <a href="#">
                    <h3>Trouvez la chambre qui vous convient </h3>
                </a>
                <p>
                    Vous avez le choix parmi toutes les propriétés présentes. Filtrez selon vos exigences pour trouver votre prochaine destination.</br>
                </p>
            </div>
            <div class="div_filtre">
                <div class="filtre_ville">
                    <v-select @input="search()" placeholder="Ville" class="select_ville" v-model="sort_by_ville" label="name" :options="villes"
                        :reduce="(ville) => ville.id" append-to-body />
                </div>
                
                <div class="filtre_feature">
                    <select class="form-control" v-model="sort_by_feature"  @change="search()">
                    <option disabled value="">Chambre</option>
                    <option value="01 chambre salon">01 chambre salon</option>
                    <option value="02 chambres salon">02 chambres salon</option>
                    <option value="03 chambres salon">03 chambres salon</option>
                    <option value="04 chambres salon">04 chambres salon</option>
                    </select>
                </div>

                <div class="filtre_loyer">
                    <select class="form-control" v-model="sort_by_price" required @change="search()">
                        <option value="">Loyer</option>
                        <option value="is_sort_by_price_desc">Prix en ordre décroissant</option>
                        <option value="is_sort_by_price_asc">Prix en ordre croissant</option>
                    </select>
                </div>

            </div>
            <div class="row">
                <div class="blog-grid home-blog" >
                    <div class="col-md-4 col-sm-6 col-xs-12" v-for="(propriete, v) in proprietes" :key="v">
                        <div class="single-blog">
                            <div class="blog-image">
                                <div class="image-scale">
                                    <img :src="'http://localhost:8000/'+propriete.propriete_pictures[0].picture.path" alt="" v-if="propriete.propriete_pictures.length > 0 "/>
                                    <img src="/img/no-img.png" alt="" v-else-if="propriete.propriete_pictures.length == 0 ">
                                    <!-- <img src="/img/blog/b1.jpg" alt=""> -->
                                </div>
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
                                    <NuxtLink :to="'/chambre/voir/'+propriete.id"><li><a class="facebook" href=""><i class="fa fa-search-plus" aria-hidden="true"></i></a></li></NuxtLink>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-sm-12 col-xs-12 text-center"  v-if="contents != null ">
                        <hr>
                        <p class="text-center" v-if="contents.total > 1">{{ contents.total }} propriétés ajoutées</p>
                        <p class="text-center" v-else>{{ contents.total }} propriété ajoutée</p>
                        <hr>
                        <div class="blog-pagination">
                            <ul class="pagination">
                                <li :class="(contents.prev_page_url == null)? 'page-item disabled':'page-item'"><a class="page-link" @click="getProprietes(contents.current_page - 1)">Précédent</a></li>
                                <li :class="(link.active === true)? 'page-link active':'page-link'" v-for="(link, index) in contents.links" :key="index"><a  href="#" @click="getProprietes(link.label)">{{link.label}}</a></li>
                                <li :class="(contents.next_page_url == null)? 'page-item disabled':'page-item'"><a class="page-link" @click="getProprietes(contents.current_page + 1)">Suivant</a></li>                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
    name: "GetPropriete",
    components: {
        vSelect
    },
    
    data() {
        return {
            proprietes: [],
            errors: [],
            error: null,
            contents: null,
            villes: [],
            quartiers: [],
            selectedVille: null,
            sort_by_feature: "",
            sort_by_price: "",
            sort_by_ville: "",
            error_modal: null,
            success_modal: null,
            proprieteId: null,
            villeId: null
        };
    },
    mounted() {
          this.getVilles();
          this.getProprietes();
    },

    methods: {
        
        getVilles(){
            this.$axios.get('/villes')
            .then(response =>{
                // console.log(response.data.data);
                this.villes = response.data.data
            })
        },

        // updateSelectedVille() {
        //     this.sort_by_ville = this.villes.find(ville => ville.id === this.villeId);
        //     this.search();
        // },

        closeModal() {
            this.selectedFile = null;
            this.success_modal = null;
            this.error_modal = null;
            const currentUrl = window.location.href.split("#")[0];
            window.history.replaceState(null, null, currentUrl);
        },

        chargeId(id){
            this.proprieteId = id
        },

        getProprietes(page=1) { 
            this.$axios.get('/chambres',{
                params: {
                    per_page: 18,
                    page: page,
                }
            })
            .then(response =>{
            //   console.log(response);
                this.proprietes = response.data.data.data
                this.contents = response.data.data
                let firstE = response.data.data.links.shift()
                let lastE = response.data.data.links.splice(-1,1);
            })
        },

        search(page=1) { 
            this.$axios.get('/search/chambres',{
                params: {
                    sort_by_ville: this.sort_by_ville,
                    sort_by_feature: this.sort_by_feature,
                    sort_by_price: this.sort_by_price,
                    per_page: 18,
                    page: page,
                }
            })
            .then(response =>{
            //   console.log(response);
                this.proprietes = response.data.data.data
                this.contents = response.data.data
                let firstE = response.data.data.links.shift()
                let lastE = response.data.data.links.splice(-1,1);
            })
        },
    }

};
</script>

<style scoped>
</style>
